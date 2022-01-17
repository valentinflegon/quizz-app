import React, { useState } from 'react';
import {
  Avatar,
  // Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  createTheme, 
  ThemeProvider, 
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { blue } from '@mui/material/colors';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import LoaderButton from "../LoaderButton";
import { useAppContext, useUserContext } from "../../lib/contextLib";
import { onError } from "../../lib/errorLib";
import { useFormFields } from "../../lib/hooksLib";

const theme = createTheme();

const Login = () => {
  const { userHasAuthenticated } = useAppContext();
  const { setUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    username: "",
    password: ""
  });
  let navigate = useNavigate();

  function validateForm() {
    return fields.username.length > 0 && fields.password.length > 0;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true)
    const data = new FormData(event.currentTarget);
    let tmp = {
      username: data.get('username'),
      password: data.get('password'),
    };
    try {
      axios.post('http://localhost:8080/api/login', tmp)
        .then((response) => {
          const { data } = response;
          if (data.success) {
            userHasAuthenticated(true);
            setUser(data.data);
            navigate("/", { replace: true, state: { username: tmp.username } });
            console.log("ici")
          }
          else {
            alert("Email or password incorrect, make sure to have an account!");
            setIsLoading(false);
          }
        });
    } catch (e) {
      console.log("ici")
      setIsLoading(false);
      onError(e);
    }
    // eslint-disable-next-line no-console
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: blue[500] }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            S'enregistrer
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              required={true}
              margin="normal"
              fullWidth
              id="username"
              label="Nom d'utilisateur"
              value={fields.username}
              onChange={handleFieldChange}
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              required={true}
              margin="normal"
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              value={fields.password}
              onChange={handleFieldChange}
              id="password"
              autoComplete="current-password"
            />
            <LoaderButton
              type="submit"
              fullWidth
              isLoading={isLoading}
              disabled={!validateForm()}
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: blue[500] }}
            >
              S'enregistrer
            </LoaderButton>
            <Grid container alignItems="center"
              justifyContent="center">
              <Grid item>
                <NavLink  to="/signin">
                  Vous n'avez pas de compte ? S'inscrire
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 3, mb: 3 }} /> */}
      </Container>
    </ThemeProvider>
  );
}

export default Login;
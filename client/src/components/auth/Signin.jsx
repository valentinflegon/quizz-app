import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <NavLink  to="/">
        Geo-Quizz
      </NavLink>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Signin = () => {

  let navigate = useNavigate();
  const [success, setSuccess] = useState(null);
  let message = {};

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let tmp = {
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
    };
    axios.post('http://localhost:8080/api/user', tmp)
      .then((response) => {
        console.log(response);
        message = response.data.message;
        console.log(message.username);
        if (message.username) {
          console.log("oui from test username set success msg");
          setSuccess(message);
          console.log(success, "success after setsuccess");
        }
        else if (message.username) {
          setSuccess(message);
        }
        else {
          console.log("on change de page");
          setSuccess(null);
          navigate("/", { replace: true, state: { isLogged: true, username: tmp.username } });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
    // eslint-disable-next-line no-console
    console.log({
      username: data.get('username'),
      email: data.get('email'),
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
            S'inscrire
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  inputProps={{ maxLength: 12 }}
                  fullWidth
                  id="username"
                  label="Nom d'utilisateur"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required={true}
                  fullWidth
                  id="email"
                  label="Adresse email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required={true}
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required={true}
                  fullWidth
                  name="confirm-password"
                  label="Confirmer mot de passe"
                  type="password"
                  id="confirm-password"
                  autoComplete="confirm-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: blue[500] }}
            >
              S'inscrire
            </Button>
            <Grid container justifyContent="center">
              <NavLink  to="/login">
                Vous avez déjà un compte? S'enregistrer
              </NavLink>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 3, mb: 3 }} /> */}
      </Container>
    </ThemeProvider>
  );
}

export default Signin;
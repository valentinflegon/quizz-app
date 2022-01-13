import * as React from 'react';
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
import { blue } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import { useAppContext } from "../../lib/contextLib";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <NavLink exact to="/">
        Geo-Quizz
      </NavLink>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
const Login = () => {
  const { userHasAuthenticated } = useAppContext();
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let tmp = {
      username: data.get('username'),
      password: data.get('password'),
    }


    axios.post('http://localhost:3002/api/login', tmp)
      .then((response) => {
        const { data } = response;
        // setConnexionData(data);
        console.log(data, 'from retour api');
        if (data.success) {
          console.log(data, "on navigate lol");
          alert("Logged in");
          userHasAuthenticated(true);
          navigate("/play", { replace: true, state: { username: tmp.username } });
        }
        else{
          alert("Logged in fail, make sure to have an account!");
        }
      });
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
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: blue[500] }}
            >
              S'enregistrer
            </Button>
            <Grid container alignItems="center"
              justifyContent="center">
              <Grid item>
                <NavLink exact to="/signin">
                  Vous n'avez pas de compte ? S'inscrire
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 3, mb: 3 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Login;
import React from 'react';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Paper,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const MainMenu = () => {
  return (
    <>
      <h2 className='cate-title'>Quiz des Distances</h2>
      <div className='row'  >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <NavLink  to="/dist-countries">
              <Card className='card' >
                <CardContent>
                  <Typography variant="h5" component="div">
                    Distance entre pays
                  </Typography>
                </CardContent>
              </Card>
            </NavLink>
          </Grid>
          <Grid item xs={6}>
            <NavLink  to="/dist-cities">
              <Card className='card'>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Distance entre villes
                  </Typography>
                </CardContent>
              </Card>
            </NavLink>
          </Grid>
        </Grid>
      </div>
      <h2 className='cate-title'>Quiz des Populations</h2>
      <div className='row'  >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <NavLink  to="/pop-countries">
              <Card className='card' >
                <CardContent>
                  <Typography variant="h5" component="div">
                    Population d'un pays
                  </Typography>
                </CardContent>
              </Card>
            </NavLink>
          </Grid>
          <Grid item xs={6}>
            <NavLink  to="/pop-cities">
              <Card className='card'>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Population d'une ville
                  </Typography>
                </CardContent>
              </Card>
            </NavLink>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default MainMenu;
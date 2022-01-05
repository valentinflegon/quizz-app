import React from 'react';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


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
<h2>Distance</h2>
<Grid container className='cards' spacing={2}>
  <Grid item xs={5}>
    
    <Card >
      <CardContent>
        <Typography variant="h5" component="div">
         Jeux
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
  </Grid>
  <Grid item xs={5}>
    <Card >
      <CardContent>
        <Typography variant="h5" component="div">
         Classement
        </Typography>

      
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>
</Grid>
 
    <div className='main-menu'>
        <div className='btn btn-light'> <NavLink exact to="/play">Jouer</NavLink></div>
      </div>

      </>
  )


};

export default MainMenu;


    

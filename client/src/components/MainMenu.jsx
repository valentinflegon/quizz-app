import React from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
    <><Card sx={{ minWidth: 275, maxWidth: 500, margin:10 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>

        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ minWidth: 275, maxWidth: 500, margin:10 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>

        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <div className='main-menu'>
        <div className='btn btn-light'> <NavLink exact to="/play">Jouer</NavLink></div>
        <div className='btn btn-light'> <NavLink exact to="/leaderboard">Classement</NavLink></div>
      </div></>
  )
};

export default MainMenu;


    

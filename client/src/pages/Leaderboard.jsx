import React from 'react';
import {
  Button,
  ButtonGroup,
  Box,
  Typography,
 } from '@mui/material';

import { NavLink } from 'react-router-dom';

const Leaderboard = () => {
  return (
    <div className='leaderboard-page'>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button component={NavLink} to="/leaderboard" size="large">
          Distance
        </Button>
        <Button component={NavLink} to="/leaderboard" size="large">
          Population
        </Button>
      </ButtonGroup>
      <Typography
        variant="h4" 
        gutterBottom component="div"
      >
        Cliquer sur le bouton de votre choix, pour aller voir le classement qui lui est lié!
      </Typography>
      {/* <LeaderBoard /> */}
    </Box>
    </div>
  );
};

export default Leaderboard;
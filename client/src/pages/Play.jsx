import React from 'react';
import { useLocation } from 'react-router-dom';
import GamemodChoice from '../components/GamemodChoice';

const Play = () => {
  let { state } = useLocation();
  console.log(state);

  if(state){
    return (
      <div className='play-page'>
        <h1>Bienvenue {state.username} !</h1>
        <GamemodChoice />
      </div>
    );
  }
  else {
    return (
      <div className='play-page'>
        <GamemodChoice />
      </div>
    );
  }
  
};

export default Play;
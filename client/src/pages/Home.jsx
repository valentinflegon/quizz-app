import React from 'react';
import { MainMenu } from '../components/';
import { useLocation } from 'react-router-dom';

const Home = () => {

  let location = useLocation();
  console.log(location);

  return (
    <div className='home'>
      <MainMenu />
    </div>
  );
};

export default Home;
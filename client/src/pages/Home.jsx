import React from 'react';
import Mainmenu from '../components/MainMenu';
import { useLocation } from 'react-router-dom';

const Home = () => {

  let location = useLocation();
  console.log(location);

  return (
    <div className='home'>
      <Mainmenu />
    </div>
  );
};

export default Home;
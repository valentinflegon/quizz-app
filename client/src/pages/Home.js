import React from 'react';
import Navbar from '../components/Navbar';
import Mainmenu from '../components/MainMenu';
import { useLocation } from 'react-router-dom';

const Home = () => {

  let location = useLocation();
  console.log(location);

  return (
    <div className='home'>
      <Navbar />
      <Mainmenu />
    </div>
  );
};

export default Home;
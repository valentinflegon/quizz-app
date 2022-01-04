import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, Login, Signin, Play, NotFound} from '../pages';
import {Navbar, Footer, CountryDist} from '../components';
import "../styles/App.scss"

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signin" element={<Signin/>} />
            <Route exact path="/play" element={<Play/>} />
            <Route exact path="/countryDistances" element={<CountryDist/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, LogIn, SignIn, Play, NotFound } from '../pages';
import { Navbar, Footer, CountryDist } from '../components';

const App = () => {
  return (
    <div className='App gradient__bg'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/play" element={<Play />} />
          <Route exact path="/countryDistances" element={<CountryDist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
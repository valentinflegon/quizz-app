import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, LogIn, SignIn, Play, NotFound, Contact, AboutUs, Terms_Conditions, PopCities, PopCountries, DistCities, DistCountries } from '../pages';
import { Navbar, CountryDist, LeaderBoard,Footer} from '../components';

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
          <Route exact path="/leaderboard" element={<LeaderBoard />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/terms-conditions" element={<Terms_Conditions />} />
          <Route exact path="/dist-cities" element={<DistCities />} />
          <Route exact path="/dist-countries" element={<DistCountries />} />
          <Route exact path="/pop-cities" element={<PopCities />} />
          <Route exact path="/pop-countries" element={<PopCountries />} />





          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
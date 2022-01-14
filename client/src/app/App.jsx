import React, { useState } from "react";
import { AppContext, UserContext } from "../lib/contextLib";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {
  Home,
  LogIn,
  SignIn,
  Play,
  NotFound,
  AboutUs,
  TermsConditions,
  PopCities,
  PopCountries,
  DistCities,
  DistCountries,
  Leaderboard,
  Profile,
  Settings,
} from '../pages';
import {
  Navbar,
  CountryDist,
  Footer,
} from '../components';

const App = () => {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [user, setUser] = useState();
  return (
    <div className='App gradient__bg'>
      <BrowserRouter>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <UserContext.Provider value={{ user, setUser }}>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<LogIn />} />
              <Route exact path="/signin" element={<SignIn />} />
              <Route exact path="/play" element={<Play />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/settings" element={<Settings />} />
              <Route exact path="/countryDistances" element={<CountryDist />} />
              <Route exact path="/leaderboard" element={<Leaderboard />} />
              <Route exact path="/about-us" element={<AboutUs />} />
              <Route exact path="/terms-conditions" element={<TermsConditions />} />
              <Route exact path="/dist-cities" element={<DistCities />} />
              <Route exact path="/dist-countries" element={<DistCountries />} />
              <Route exact path="/pop-cities" element={<PopCities />} />
              <Route exact path="/pop-countries" element={<PopCountries />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </UserContext.Provider>
        </AppContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
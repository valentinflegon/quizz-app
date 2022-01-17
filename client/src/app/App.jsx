import React, { useState } from "react";
import { AppContext, UserContext, UsersContext } from "../lib/contextLib";
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
  const [users, setUsers] = useState();
  return (
    <div className='App gradient__bg'>
      <BrowserRouter>
      <UsersContext.Provider value={{ users, setUsers }}>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <UserContext.Provider value={{ user, setUser }}>
            <Navbar />
            <Routes>
              <Route  path="/" element={<Home />} />
              <Route  path="/login" element={<LogIn />} />
              <Route  path="/signin" element={<SignIn />} />
              <Route  path="/play" element={<Play />} />
              <Route  path="/profile" element={<Profile />} />
              <Route  path="/settings" element={<Settings />} />
              <Route  path="/countryDistances" element={<CountryDist />} />
              <Route  path="/leaderboard" element={<Leaderboard />} />
              <Route  path="/about-us" element={<AboutUs />} />
              <Route  path="/dist-cities" element={<DistCities />} />
              <Route  path="/dist-countries" element={<DistCountries />} />
              <Route  path="/pop-cities" element={<PopCities />} />
              <Route  path="/pop-countries" element={<PopCountries />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </UserContext.Provider>
        </AppContext.Provider>
        </UsersContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
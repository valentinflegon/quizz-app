import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, Login, Signin, Play, NotFound} from '../pages';

// import Home from "../pages/Home";
// import NotFound from "../pages/NotFound";
// import Login from "../pages/auth/Login";
// import Signin from "../pages/auth/Signin";
// import Play from '../pages/Play';
import CountryDist from '../components/CountryDist';
import Navbar from '../components/Navbar';

function App() {
  return (
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
    </BrowserRouter>

  )
}

export default App;
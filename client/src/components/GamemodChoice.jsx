import React, { useState } from 'react';
import { 
  NavLink, 
  useLocation,
  } from 'react-router-dom';

const GamemodChoice = () => {
  let { state } = useLocation();
  console.log(state, "from game mod choice");

  const data = require('./paysGood.json');
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const [countries, setCountries] = useState(null);
  function loadCountries() {
    const nb = getRandomInt(data.length);
    const pays1 = data[nb];
    console.log(data.length);
    console.log(pays1);
    data.splice(nb, 1);
    console.log(data.length);
    const nb2 = getRandomInt(data.length);
    const pays2 = data[nb2];
    console.log(pays2);
    data.splice(nb2, 1);
    console.log(data.length);
    setCountries([pays1, pays2]);
  }
  return (
    <div className='gamemodchoice container form-card center'>
      {state && <h1>wallah le game mod choice a bien capté que c'etait {state.username} le boss !</h1>}
      <div className='row mt-3 form-card'>
        <h5>Jouer au mode Distance</h5>
        <div className='col'><NavLink exact to="/play" state={{mode: "Distance entre pays"}}>Distance entre pays</NavLink></div>
        <div className='col'><NavLink exact to="/play" state={{mode: "Distance entre villes"}}>Distance entre villes</NavLink></div>
      </div>
      <div className='row mt-3 form-card'>
        <h5>Jouer au mode Population</h5>
        <div className='col'><NavLink exact to="/play" state={{mode: "Population de pays"}}>Population de pays</NavLink></div>
        <div className='col'><NavLink exact to="/play" state={{mode: "Population de villes"}}>Population de villes</NavLink></div>
      </div>
      {countries &&
        <NavLink exact to="/countryDistances" state={{ from: [countries[0], countries[1]] }}>jouer au mode distance country</NavLink>
      }
      <button onClick={loadCountries}> changer de pays</button>
      {countries && <div>Trouvez la distance entre {countries[0]} et {countries[1]}</div>}
    </div>
  );
};

export default GamemodChoice;
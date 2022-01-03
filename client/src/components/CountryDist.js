import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const CountryDist = () => {

  let location = useLocation();
  console.log(location.state, 'les props avec uselocation');

  axios.get('https://fr.distance24.org/route.json?stops='+location.state.from[0]+'|'+location.state.from[1])
  .then((resp) => {
    console.log(resp, 'resultat distance');
  });

  // axios({
  //   method: 'get', 
  //   url : 'https://fr.distance.to/France/Ouganda'
  // })
  // .then((resp) => {
  //   console.log(resp, 'resultat distance');
  // });
  return (
    <div className='countryDist'>
      {location.state.from && <p>trouvez la distance entre {location.state.from[0]} et {location.state.from[1]}</p>}
      <input type="texte" placeholder="Votre reponse en km"/>
      <button>question suivante</button>
    </div>
  );
};

export default CountryDist;
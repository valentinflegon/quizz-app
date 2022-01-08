import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import QuestionCard from "../../components/QuestionCard";
import { Card, Button } from "@mui/material";
import '../../styles/components/_DistCities.scss'
import TextField from '@mui/material/TextField';


const NUMBERQUESTION = 10;

const DistCities = () => {
  let { state } = useLocation();

  const data = require("../../components/cities.json");
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const [cities, setCities] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function loadCities() {
    const nb = getRandomInt(data.length);
    const citie1 = data[nb];
    data.splice(nb, 1);
    const nb2 = getRandomInt(data.length);
    const citie2 = data[nb2];
    data.splice(nb2, 1);
    setCities([citie1, citie2]);

    setCurrentQuestion([parseInt(currentQuestion) + 1]);
  }

  function newGame(){
    setCurrentQuestion([parseInt(0) + 1]);
  }

  if (currentQuestion == 0) {
    return (
      <>
        <h1>Quizz Distance Villes</h1>
        <Card className='startCard' >
            <div className="button">
            <Button onClick={loadCities} variant="contained">
              Commencer
            </Button>
          </div>
        </Card>
      </>
    );
  }
  if (currentQuestion == NUMBERQUESTION + 1) {
    return (
      <>
        <h1>Quizz Distance Villes</h1>
        <Card className='startCard' >
            
            <div>Tab score </div>
            <Button onClick={loadCities,newGame} variant="contained">
            Next
          </Button>
        </Card>
      </>
    );
  } 
  else
    return (
      <>
        <h1>Quizz Distance Villes</h1>

        <Card className='questionCard'>
          <h2>Question {currentQuestion}/10: <br /> <span>Quelle est la distance entre  {cities[0]} et {cities[1]} ?</span></h2>

          <TextField
            className='inputField'
            id="outlined-number"
            label="Réponse"
            type="number"
            placeholder= "Distance en KM"
            InputLabelProps={{
              shrink: true,
            }}
          /> 
        
        <div className="button">
          <Button onClick={loadCities} variant="contained">
            Next
          </Button>
        </div>
        </Card></>
    );
};

export default DistCities;

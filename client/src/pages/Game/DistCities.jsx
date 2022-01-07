import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import QuestionCard from "../../components/QuestionCard";
import { Card, Button } from "@mui/material";

const NUMBERQUESTION = 10;

const DistCities = () => {
  let { state } = useLocation();
  console.log(state, "from game mod choice");

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

  if (currentQuestion == 0) { //Pas encore commencé
    return (
      <>
        <h1>Quizz Distance Villes</h1>

        <div className="button">
          <Button onClick={loadCities} variant="contained">
            Commencer
          </Button>
        </div>
      </>
    );
  }
  if (currentQuestion == 11) { // Quizz fini
    return (
      <>
        <h1>Quizz Distance Villes</h1>

        <div className="button">Finito </div>
      </>
    );
  } else
    return (
      <>
        <h1>Quizz Distance Villes</h1>

        {cities && currentQuestion && (
          <QuestionCard
            currentQuestion={currentQuestion}
            question={"Quelle est la distance entre "}
            citie1={cities[0]}
            citie2={cities[1]}
            inputText={"Distance en KM"}
          />
        )}
        <div className="button">
          <Button onClick={loadCities} variant="contained">
            Next
          </Button>
        </div>
      </>
    );
};

export default DistCities;

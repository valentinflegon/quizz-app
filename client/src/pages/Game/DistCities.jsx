import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import QuestionCard from "../../components/QuestionCard";
import { Card, Button } from "@mui/material";
import "../../styles/components/_DistCities.scss";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

const NUMBERQUESTION = 10;

const DistCities = () => {
  let { state } = useLocation();

  const [list, setList] = React.useState([]);
  // const [open, setOpen] = React.useState(true);
  const [cities, setCities] = useState(null);
  const [answer, setAnswer] = React.useState("");
  const [sumScore, setSumScore] = React.useState(0);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleChange(event) {
    setAnswer(event.target.value);
  }

  function handleAdd() {
    setCurrentQuestion([parseInt(currentQuestion) + 1]);
    let citie1 = cities[0];
    let citie2 = cities[1];
    let distance;
   
    axios
      .get(
        "https://fr.distance24.org/route.json?stops=" +
          cities[0] +
          "|" +
          cities[1]
      )
      .then((resp) => {
        distance = resp.data.distance;
        console.log(
          resp.data.distance,
          "resultat distance entre " + cities[0] + " " + cities[1]
        );

        let accuracyValue = accuracy(answer,distance);
        accuracyValue = accuracyValue.toFixed(3)
        let scoreQuestion = scoreFunction(accuracyValue);
        setSumScore(sumScore + scoreQuestion);

        const newList = list.concat({
          distance,
          accuracyValue,
          scoreQuestion,
          citie1,
          citie2,
          currentQuestion,
          answer,
        });
        setList(newList);
        console.log(list);
        loadCities();
      });
  }

  function scoreFunction(accuracy) {
    return Math.ceil(accuracy);
  }

  function accuracy(answer,distance) {
    ///////////////////
    ///////////////////
    let realAnswer = distance; //mettre le resultat de la requete a l'api
    accuracy = 100 - (Math.abs(answer - realAnswer) * 100) / realAnswer;
    if (accuracy < 0) return 0;
    else return accuracy;
  }

  const data = require("../../components/cities.json");
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

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

  function newGame() {
    setCurrentQuestion([parseInt(0) + 1]);
    const newList = [];
    setSumScore(0);
    setList(newList);
  }

  if (currentQuestion == 0) {
    return (
      <>
        <h1>Quizz Distance Villes</h1>
        <Card className="startCard">
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
        <TableContainer className="tab" component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Question</b>
                </TableCell>
                <TableCell align="right">
                  <b>Précision(%)</b>
                </TableCell>
                <TableCell align="right">
                  <b>Votre réponse(KM)</b>
                </TableCell>
                <TableCell align="right">
                  <b>Correction(KM)</b>
                </TableCell>
                <TableCell align="right">
                  <b>Score</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row) => (
                <>
                  {" "}
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.citie1} / {row.citie2}
                    </TableCell>
                    <TableCell align="right">{row.accuracyValue}</TableCell>
                    <TableCell align="right">{row.answer}</TableCell>
                    <TableCell align="right">{row.distance}</TableCell>
                    <TableCell align="right">{row.scoreQuestion}</TableCell>
                  </TableRow>
                </>
              ))}
              <TableRow>
                <TableCell colSpan={4}>
                  {" "}
                  <b>Score</b>
                </TableCell>
                <TableCell colSpan={4}>
                  <b>{sumScore}</b>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div className="buttonEnd">
          <Button onClick={(loadCities, newGame)} variant="contained">
            Recommencer
          </Button>
        </div>
      </>
    );
  }
  //ajouter a un tableau le numero de la question, le nom des villes
  //la distance de l'input et la bonne réponse
  else
    return (
      <>
        <h1>Quizz Distance Villes</h1>

        <Card className="questionCard">
          <h2>
            Question {currentQuestion}/10: <br />
            <span>
              Quelle est la distance entre {cities[0]} et {cities[1]} ?
            </span>
          </h2>

          <TextField
            type="number"
            label="Distance en KM"
            variant="outlined"
            onChange={handleChange}
            value={answer}
          />

          <div className="button">
            <Button onClick={handleAdd} variant="contained">
              Next
            </Button>
          </div>
        </Card>
      </>
    );
};

export default DistCities;

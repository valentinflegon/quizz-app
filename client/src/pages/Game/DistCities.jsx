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
import { blue } from "@mui/material/colors";
import LoaderButton from "../../components/LoaderButton";
import { useUserContext } from "../../lib/contextLib";

const NUMBERQUESTION = 10;

const DistCities = () => {
  const user = useUserContext();
  const { setUser } = useUserContext();
  let { state } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  let data = require("../../components/cities.json");

  const [list, setList] = React.useState([]);
  const [listCopy, setListCopy] = React.useState([]);
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
    setIsLoading(true);
    try {
      axios
        .get(
          "https://fr.distance24.org/route.json?stops=" +
            cities[0] +
            "|" +
            cities[1]
        )
        .then((resp) => {
          distance = resp.data.distance;

          let accuracyValue = accuracy(answer, distance);
          accuracyValue = accuracyValue.toFixed(3);
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
          loadCities();
          setIsLoading(false);
        });
    } catch (error) {
      setIsLoading(false);
    }
  }

  function scoreFunction(accuracy) {
    return Math.ceil(accuracy);
  }

  function accuracy(answer, distance) {
    let realAnswer = distance;
    accuracy = 100 - (Math.abs(answer - realAnswer) * 100) / realAnswer;
    if (accuracy < 0) return 0;
    else return accuracy;
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function loadCities() {
    if (data.length <= 3) {
      // A MODIFIER
      data = data.concat(listCopy);
      setListCopy(null);
    }
    const nb = getRandomInt(data.length);

    const citie1 = data[nb];
    const c1 = citie1.toString(2);
    data.splice(nb, 1);

    const nb2 = getRandomInt(data.length);
    const citie2 = data[nb2];
    const c2 = citie2.toString(2);
    data.splice(nb2, 1);

    const newList = listCopy.concat(c1, c2);

    setCities([citie1, citie2]);
    setCurrentQuestion([parseInt(currentQuestion) + 1]);
    setListCopy(newList);
  }

  function newGame() {
    sendScore();
    setCurrentQuestion([parseInt(0) + 1]);
    const newList = [];
    setSumScore(0);
    setList(newList);
  }

  function sendScore() {
    try {
      if (user.user._id != null) {
        const score = 
        {
          "scores": {
            "distanceVilles": sumScore,
          }
        }
        try {
          const URL = "http://localhost:3002/api/add-score/" + user.user._id;
          axios.put(URL, score).then((response) => {
            const { data } = response;
            if (data.success) {
            } else {
              alert("Error");
            }
          });
        } catch (e) {
          console.log("erreur : ", e);
        }
      }
    } catch (e) {}
  }

  if (currentQuestion == 0) {
    return (
      <>
        <h1>Quiz Distance Villes</h1>
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
        <h1>Quiz Distance Villes</h1>
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
        <h1>Quiz Distance Villes</h1>

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
            <LoaderButton
              type="submit"
              onClick={handleAdd}
              isLoading={isLoading}
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: blue[500] }}
            >
              Next
            </LoaderButton>
          </div>
          {/* <div className="button">
            <Button onClick={handleAdd} variant="contained">
              Next
            </Button>
          </div> */}
        </Card>
      </>
    );
};

export default DistCities;

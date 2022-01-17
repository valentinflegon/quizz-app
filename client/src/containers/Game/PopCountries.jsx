import React, { useState } from "react";
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

const PopCountries = () => {
  const user = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  let data = require("../../data/popCountries.json");

  const [list, setList] = React.useState([]);
  const [listCopy, setListCopy] = React.useState([]);
  const [countries, setCities] = useState(null);
  const [answer, setAnswer] = React.useState("");
  const [sumScore, setSumScore] = React.useState(0);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleChange(event) {
    setAnswer(event.target.value);
  }

  function handleAdd() {
    setCurrentQuestion([parseInt(currentQuestion) + 1]);
    let countrie1 = countries[0];
    console.log(countries);
    let population;
    setIsLoading(true);

  
    const _country = {"country": countrie1}

    try {
      axios
        .post("https://countriesnow.space/api/v0.1/countries/population",
          _country
        )
        .then((resp) => {
          population = resp.data.data.populationCounts[resp.data.data.populationCounts.length-1].value
          console.log(population);
          let accuracyValue = accuracy(answer, population);
          accuracyValue = accuracyValue.toFixed(3);
          let scoreQuestion = scoreFunction(accuracyValue);
          setSumScore(sumScore + scoreQuestion);

          const newList = list.concat({
            population,
            accuracyValue,
            scoreQuestion,
            countrie1,
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

  function accuracy(answer, population) {
    let realAnswer = population;
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

    
    const newList = listCopy.concat(c1);

    setCities([citie1]);
    setCurrentQuestion([parseInt(currentQuestion) + 1]);
    setListCopy(newList);
  }

  function newGame() {
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
            "populationPays": sumScore,
          }
        }
        try {
          const URL = "http://localhost:8080/api/add-score/" + user.user._id;
          axios.put(URL, score).then((response) => {
            const { data } = response;
            if (data.success) {            
              alert("Votre score bien été ajouté ")

            } else {
              alert("Error");
            }
          });
        } catch (e) {
          alert("Vous devez vous inscrire pour enregistrer vos scores")
          console.log("erreur : ", e);
        }
      }else{

      }
    } catch (e) {
      alert("Vous devez vous inscrire pour enregistrer vos scores")
    }
  }

  if (currentQuestion == 0) {
    return (
      <>
        <h1>Quiz Population Pays</h1>
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
        <h1>Quiz Population Pays</h1>
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
                  <b>Votre réponse</b>
                </TableCell>
                <TableCell align="right">
                  <b>Correction</b>
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
                      {row.countrie1}
                    </TableCell>
                    <TableCell align="right">{row.accuracyValue}</TableCell>
                    <TableCell align="right">{row.answer}</TableCell>
                    <TableCell align="right">{row.population}</TableCell>
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
        
          <div className="saveScore"><Button  onClick={(sendScore)} variant="contained">
            Enregistrer le score
          </Button></div>
        <div><Button onClick={(loadCities, newGame)} variant="contained">
            Recommencer
          </Button></div>
  
        
         
      </>
    );
  }
  else
    return (
      <>
        <h1>Quiz Distance Pays</h1>

        <Card className="questionCard">
          <h2>
            Question {currentQuestion}/10: <br />
            <span>
              Quelle est la population de {countries[0]}  ?
            </span>
          </h2>

          <TextField
            type="number"
            label="Population"
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
        </Card>
      </>
    );
};

export default PopCountries;

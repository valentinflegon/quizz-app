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

const NUMBERQUESTION = 10;

const DistCities = () => {
  let { state } = useLocation();

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Ville1/Ville2", 3, 300, 400, 3),    
    createData("Ville1/Ville2", 3, 300, 400, 3),
    createData("Ville1/Ville2", 3, 300, 400, 3),
    createData("Ville1/Ville2", 3, 300, 400, 3),
    createData("Ville1/Ville2", 3, 300, 400, 3),
    createData("Ville1/Ville2", 3, 300, 400, 3),
    createData("Ville1/Ville2", 3, 300, 400, 3),
    createData("Ville1/Ville2", 3, 300, 400, 3),
    createData("Ville1/Ville2", 3, 300, 400, 3),
    createData("Ville1/Ville2", 3, 300, 400, 3),

  ];

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
    // fetch('https://fr.distance24.org/route.json?stops=Hamburg|Berlin',{
    //     method:'GET',
    //     headers:{
    //         "Accept": "application/json",
    //         "Content-Type": 'application/json',
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    //   'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    //   'Authorization': 'Bearer key'
    //     }
    // })
    // .the(resp => { return resp.json();})
    // .then(responseData => {console.log(responseData); return responseData;})
    // .then(data => {this.setState({"questions" : data});})
    // .catch(err => {
    //     console.log("fetch error" + err);
    // });
  }

  function newGame() {
    setCurrentQuestion([parseInt(0) + 1]);
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
          <TableContainer className='tab'component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Question</TableCell>
                  <TableCell align="right">Précision (%)</TableCell>
                  <TableCell align="right">Votre réponse (KM)</TableCell>
                  <TableCell align="right">Correction (KM)</TableCell>
                  <TableCell align="right">Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        <div className="buttonEnd"> 
            <Button onClick={(loadCities, newGame)}  variant="contained">
            Recommencer
          </Button>
        </div>
         
      </>
    );
  } else
    return (
      <>
        <h1>Quizz Distance Villes</h1>

        <Card className="questionCard">
          <h2>
            Question {currentQuestion}/10: <br />{" "}
            <span>
              Quelle est la distance entre {cities[0]} et {cities[1]} ?
            </span>
          </h2>

          <TextField
            className="inputField"
            id="outlined-number"
            label="Réponse"
            type="number"
            placeholder="Distance en KM"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <div className="button">
            <Button onClick={loadCities} variant="contained">
              Next
            </Button>
          </div>
        </Card>
      </>
    );
};

export default DistCities;

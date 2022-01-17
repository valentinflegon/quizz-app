import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
 } from "@mui/material";
import axios from "axios";
import { useUsersContext } from "../lib/contextLib";
import "../styles/_leaderboard.scss"

export default function BasicTable() {
  const rowsDistCities = [];
  const [arrayDistCities, setArrayDistCities] = useState([]);

  const rowsDistCountries = [];
  const [arrayDistCountries, setArrayDistCountries] = useState([]);

  const onChangeDistCities = ({ target }) => setArrayDistCities(target.arrayDistCities);
  const onChangeDistCountries = ({ target }) => setArrayDistCountries(target.arrayDistCoutries);

  const { setUsers } = useUsersContext();
  try {
    axios.get("http://localhost:8080/api/users/").then((response) => {
      const { data } = response;
      if (data.success) {
        data.data.map((userObject) => {
          let maxDistCountries = 0;
          let maxDistCities = 0
          for (let i = 0; i < userObject.scores.distancePays.length; i++) {
            if (userObject.scores.distancePays[i] > maxDistCountries)
              maxDistCountries = userObject.scores.distancePays[i];
          }
          rowsDistCountries.push({ username: userObject.username, score: maxDistCountries });
          rowsDistCountries.sort((a, b) => b.score - a.score);

          for (let i = 0; i < userObject.scores.distanceVilles.length; i++) {
            if (userObject.scores.distanceVilles[i] > maxDistCities)
              maxDistCities = userObject.scores.distanceVilles[i];
          }
          rowsDistCities.push({ username: userObject.username, score: maxDistCities });
          rowsDistCities.sort((a, b) => b.score - a.score);

          
        });
        setUsers(data.data);
      } else {
        alert("Error");
      }
    });
  } catch (e) {
    console.log(e);
  }
  useEffect(() => setArrayDistCountries(rowsDistCountries), arrayDistCountries);
  useEffect(() => setArrayDistCities(rowsDistCities), arrayDistCities);

    return (
    <><div className="Tab">
        <p><strong>LeaderBoard Distance Pays: </strong></p>
        <TableContainer onChange={{ onChangeDistCountries}} sx={{ width: 400 }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center"><b>Classement</b></TableCell>
                <TableCell align="center"><b>Username</b></TableCell>
                <TableCell align="center"><b>Score&nbsp;(pts)</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {arrayDistCountries.slice(0, 10).map((rowsDistCountries, index) => (
                <TableRow
                  key={rowsDistCountries.usernamename}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {rowsDistCountries.username}
                  </TableCell>
                  <TableCell align="right">{rowsDistCountries.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="Tab">
          <p><strong>LeaderBoard Distance Villes: </strong></p>
          <TableContainer onChange={{ onChangeDistCities }} sx={{ width: 400 }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center"><b>Classement</b></TableCell>
                  <TableCell align="center"><b>Username</b></TableCell>
                  <TableCell align="center"><b>Score&nbsp;(pts)</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {arrayDistCities.slice(0, 10).map((rowsDistCities, index) => (
                  <TableRow
                    key={rowsDistCities.usernamename}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {rowsDistCities.username}
                    </TableCell>
                    <TableCell align="right">{rowsDistCities.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        </>
    
    );

}

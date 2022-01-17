import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import Paper from "@mui/material/Paper";

import "../styles/_leaderboard.scss"

const rows = [];

export default function BasicTable() {
  const [array, setArray] = React.useState([]);
  try {
    axios.get("http://localhost:3002/api/users/").then((response) => {
      const { data } = response;
      if (data.success) {
        data.data.map((userObject) => {
          let max = 0;
          for (let i = 0; i < userObject.scores.distancePays.length; i++) {
            if (userObject.scores.distancePays[i] > max)
              max = userObject.scores.distancePays[i];
          }
          rows.push({ username: userObject.username, score: max });
          rows.sort((a, b) => b.score - a.score);
        });
        setArray(rows);
      } else {
        alert("Error");
      }
    });
  } catch (e) {
    console.log(e);
  }

    return (
    <div className="Tab">
      <p><strong>LeaderBoard Distance Villes : </strong></p>
      <TableContainer sx={{width: 400}}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell align="center"><b>Classement</b></TableCell>
              <TableCell align="center"><b>Username</b></TableCell>
              <TableCell align="center"><b>Score&nbsp;(pts)</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {array.slice(0,10).map((row,index) => (
              <TableRow
                key={row.usernamename}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index+1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.username}
                </TableCell>
                <TableCell align="right">{row.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>);

}

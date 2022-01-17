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
  const rows = [];
  const [array, setArray] = useState([]);
  const onChange = ({ target }) => setArray(target.array);
  const { setUsers } = useUsersContext();
  try {
    axios.get("http://localhost:8080/api/users/").then((response) => {
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
        setUsers(data.data);
      } else {
        alert("Error");
      }
    });
  } catch (e) {
    console.log(e);
  }
  useEffect(() => setArray(rows), array);
    return (
    <div className="Tab">
      <p><strong>LeaderBoard Distance Villes : </strong></p>
      <TableContainer onChange={{onChange}} sx={{width: 400}}>
        <Table aria-label="simple table">
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

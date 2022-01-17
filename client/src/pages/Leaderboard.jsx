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
  console.log("basic table called");
  const [array, setArray] = useState([]);
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
        });
        setArray(rows);
        console.log(rows);
      } else {
        alert("Error");
      }
    });
  } catch (e) {
    console.log(e);
  }
  // return array.length > 0 ? (

    return (
    <div className="Tab">
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Username</TableCell>
              <TableCell align="right">Score&nbsp;(pts)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {array.map((row) => (
              <TableRow
                key={row.usernamename}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
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
  // ) : (
  //   <div className="Tab">
  //     <TableContainer>
  //       <Table sx={{}} aria-label="simple table">
  //         <TableHead>
  //           <TableRow>
  //             <TableCell align="left">Username</TableCell>
  //             <TableCell align="right">Score&nbsp;(pts)</TableCell>
  //           </TableRow>
  //         </TableHead>
  //         <TableBody></TableBody>
  //       </Table>
  //     </TableContainer>
  //   </div>
  // );
}

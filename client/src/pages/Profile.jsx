import React from "react";
import { useUserContext } from "../lib/contextLib";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Profile = () => {
  const user = useUserContext();
  console.log(user.user.scores.distancePays);
  const [listDistCities, setListDistCities] = React.useState(user.user.scores.distanceVilles);
  const [listDistCountries, setListDistCountries] = React.useState(user.user.scores.distancePays);

  return (
    <>
      {" "}
      <div className="profile">
        <div>
          <p>Profile image : </p>
          <p>Profile username : {user.user.username}</p>
        </div>
      </div>

      <a>Score distance Villes:</a>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listDistCities.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* <TableCell component="th" scope="row">
                  {row.name}
                </TableCell> */}
                <TableCell align="left">{row}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <a>Score distance Ville:</a>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listDistCountries.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* <TableCell component="th" scope="row">
                  {row.name}
                </TableCell> */}
                <TableCell align="left">{row}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  
    </>
  );
};

export default Profile;

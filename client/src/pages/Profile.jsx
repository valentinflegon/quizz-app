import React from "react";
import { useUserContext } from "../lib/contextLib";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../styles/components/_profile.scss";

const Profile = () => {
  const user = useUserContext();
  console.log(user.user.scores.distancePays);
  const [listDistCities, setListDistCities] = React.useState(
    user.user.scores.distanceVilles
  );
  const [listDistCountries, setListDistCountries] = React.useState(
    user.user.scores.distancePays
  );

  listDistCities.sort((a,b) => b - a);
  listDistCountries.sort((a,b) => b - a);



  return (
    <>
      {" "}
      <div className="profile">
        <div>
          <p>Profile image : </p>
          <p>Profile username : {user.user.username}</p>
        </div>
      </div>
      <div className="Tab">
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Score distance Villes:</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listDistCities.slice(0,5).map((row) => (
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
      </div>
      <div className="Tab ">
        <TableContainer component={Paper}>
          <Table sx={{ }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell><b>Score distance Pays:</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listDistCountries.slice(0,5).map((row) => (
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
      </div>
    </>
  );
};

export default Profile;

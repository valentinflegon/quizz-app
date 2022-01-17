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
import { IconButton, Avatar } from "@mui/material";
import avatar from "../assets/avatar.png";


const Profile = () => {
  const user = useUserContext();
  console.log(user.user.scores.distancePays);
  const [listDistCities, setListDistCities] = React.useState(
    user.user.scores.distanceVilles
  );
  const [listDistCountries, setListDistCountries] = React.useState(
    user.user.scores.distancePays
  );
  const [listPopCities, setListPopCities] = React.useState(
    user.user.scores.populationVilles
  );
  const [listPopCountries, setListPopCountries] = React.useState(
    user.user.scores.populationPays
  );
  listDistCities.sort((a, b) => b - a);
  listDistCountries.sort((a, b) => b - a);
  listPopCities.sort((a, b) => b - a);
  listPopCountries.sort((a, b) => b - a);

  return (
    <>
      {" "}
      <div>
        <div className="Tab profile">
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableBody>
                <div>
                <IconButton sx={{ p: 4 }}>
                  <Avatar alt="avatar" src={avatar} />
                </IconButton>
                </div>
                <div className="name">
                <b>{user.user.username}</b>
                </div>  
              </TableBody>
            </Table>
          </TableContainer>
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
              {listDistCities.slice(0, 5).map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="Tab ">
        <TableContainer component={Paper}>
          <Table sx={{}} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Score distance Pays:</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listDistCountries.slice(0, 5).map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="Tab">
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Score population Villes:</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listPopCities.slice(0, 5).map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="Tab">
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Score population Pays:</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listPopCountries.slice(0, 5).map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
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

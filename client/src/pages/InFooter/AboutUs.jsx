import React from 'react';
import '../../styles/_aboutUs.scss';

import {
  Paper,
  Typography,
  Grid,
  Box,
  Divider,
  Link,
 } from "@mui/material";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AboutUs = () => {
  return (
    <Box>
      <Typography className="typography-header" style={{marginTop:"10px"}} variant="h2" gutterBottom component="div">
        À propos de nous
      </Typography>
      <Paper className="main-paper" elevation="0">
        <Typography variant="h6">
          Nous sommes une équipe composés de 3 étudiants en Master 2 Génie Logiciel à l'université de Bordeaux. 
        </Typography>
      </Paper>
      <Typography variant="h3" gutterBottom component="div">
        Notre mission
      </Typography>
      <Paper className="main-paper" elevation="0">
        <Typography variant="p">
          Notre objectif est de réaliser une application web en utilisant une ou plusieurs nouvelles technologies. 
          Pour réaliser GeoQuizz nous avons adopteé le pattern MERN (Mongo, Express, React, NodeJS).
        </Typography>
      </Paper>
      <Typography variant="h3" gutterBottom component="div">
        Notre vision
      </Typography>
      <Paper className="main-paper" elevation="0">
        <Typography variant="p">
          Our vision is to provide React components for faster and simpler web development.
        </Typography>
      </Paper>
      <Typography variant="h3" gutterBottom component="div">
        Nos valeurs
      </Typography>
      <Paper className="main-paper" elevation="0">
        <Typography variant="p">
          Our core values include transparency (our work is public most of the time); creating a safe, high-trust team; building incredible developer
          experiences; maintaining a healthy working environment; and helping to deliver web experiences that feel amazing to use on every device and
          connection type.
        </Typography>
      </Paper>
      <Typography variant="h3" gutterBottom component="div">
        Notre histoire
      </Typography>
      <Paper className="main-paper" elevation="0">
        <Typography variant="p">
          MUI started back in 2014 to unify React and Material Design.
          Today, MUI has grown to become one of the world's most popular React UI libraries – backed by a vibrant community of more than 1M developers
          in over 180 countries.
        </Typography>
      </Paper>
      <Typography variant="h3" gutterBottom component="div">
        Contributeurs
      </Typography>
      <Box sx={{'& > :not(style)': {m: 1,}}}>
        <Grid
          container
          align="center">
          <Grid
            xs={4}
          >
            <Paper elevation="10"
              style={{
                width: "400px",
                borderRadius: "10px"
              }}>
              <Typography
                style={{ fontWeight: "bold" }}>
                Kirsan Geoffroy
                <Link href="https://github.com/Kirsan98" target="_blank">
                  <GitHubIcon style={{ color: "green", cursor: "pointer", marginLeft: "100px" }} />
                </Link>
                <Link href="https://www.linkedin.com/in/kirsan-geoffroy-2a269a221/" target="_blank">
                  <LinkedInIcon style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} />
                </Link>
              </Typography>
              <Typography style={{ marginRight: "190px" }}>
                Développeur
              </Typography>
              <Divider style={{ width: "300px", color: "green" }} />
              <Typography variant="overline" style={{ color: "grey", marginRight: "140px" }}>
                Aimer faire la fête
              </Typography>
            </Paper>
          </Grid>

          <Grid
            xs={4}
          >
            <Paper elevation="10"
              style={{
                width: "400px",
                borderRadius: "10px"
              }}>
              <Typography style={{ fontWeight: "bold" }}>
                Valentin Flegon
                <Link href="https://github.com/valentinflegon" target="_blank">
                  <GitHubIcon style={{ color: "orange", cursor: "pointer", marginLeft: "105px" }} />
                </Link>
                <Link href="https://www.linkedin.com/in/valentin-flegon/" target="_blank">
                  <LinkedInIcon style={{ color: "orange", cursor: "pointer", marginLeft: "10px" }} />
                </Link>
              </Typography>
              <Typography style={{ marginRight: "190px" }}>
                Développeur
              </Typography>
              <Divider style={{ width: "300px", color: "orange" }} />
              <Typography variant="overline" style={{ color: "grey", marginRight: "110px" }}>
                Aimer faire bronzette
              </Typography>
            </Paper>
          </Grid>
          <Grid
            xs={4}>
            <Paper elevation="10"
              style={{
                width: "400px",
                borderRadius: "10px"
              }}>
              <Typography style={{ fontWeight: "bold" }}>
                Louis Duplantier
                <Link href="https://github.com/chtoudi" target="_blank">
                  <GitHubIcon style={{ color: "red", cursor: "pointer", marginLeft: "100px" }} />
                </Link>
                <Link href="https://www.linkedin.com/in/louis-duplantier-a99778221/" target="_blank">
                  <LinkedInIcon style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} />
                </Link>
              </Typography>
              <Typography style={{ marginRight: "195px" }}>
                Développeur
              </Typography>
              <Divider style={{ width: "300px", color: "red" }} />
              <Typography variant="overline" style={{ color: "grey", marginRight: "95px" }}>
                Aimer jouer aux cookies
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutUs;
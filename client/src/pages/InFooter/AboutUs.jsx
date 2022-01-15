import React from "react";
import "../../styles/_aboutUs.scss";
import { BoxProps } from "@mui/material/Box";
import { Paper, Typography, Grid, Box, Divider, Link } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        p: 1,
        m: 1,
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

const AboutUs = () => {
  return (
    <Box>
      <Typography
        style={{ marginTop: "10px" }}
        variant="h2"
        gutterBottom
        component="div"
      >
        À propos de nous
      </Typography>
      <Paper className="main-paper" elevation="0">
        <Typography variant="h6">
          Nous sommes une équipe composés de 3 étudiants en Master 2 Génie
          Logiciel à l'université de Bordeaux.
        </Typography>
      </Paper>
      <Typography variant="h3" gutterBottom component="div">
        Notre mission
      </Typography>
      <Paper className="main-paper" elevation="0">
        <Typography variant="p">
          Notre objectif est de réaliser une application web en utilisant une ou
          plusieurs nouvelles technologies. Pour réaliser GeoQuizz nous avons
          adopteé le pattern MERN (Mongo, Express, React, NodeJS).
        </Typography>
      </Paper>
      <Typography variant="h3" gutterBottom component="div">
        Notre vision
      </Typography>
      <Paper className="main-paper" elevation="0">
        <Typography variant="p">
          Our vision is to provide React components for faster and simpler web
          development.
        </Typography>
      </Paper>
      <Typography variant="h3" gutterBottom component="div">
        Nos valeurs
      </Typography>
      <Paper className="main-paper" elevation="0">
        <Typography variant="p">
          Our core values include transparency (our work is public most of the
          time); creating a safe, high-trust team; building incredible developer
          experiences; maintaining a healthy working environment; and helping to
          deliver web experiences that feel amazing to use on every device and
          connection type.
        </Typography>
      </Paper>
      <Typography variant="h3" gutterBottom component="div">
        Notre histoire
      </Typography>
      <Paper className="main-paper" elevation="0">
        <Typography variant="p">
          MUI started back in 2014 to unify React and Material Design. Today,
          MUI has grown to become one of the world's most popular React UI
          libraries – backed by a vibrant community of more than 1M developers
          in over 180 countries.
        </Typography>
      </Paper>
      <Typography variant="h3" gutterBottom component="div">
        Contributeurs
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
      </Box>

      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Grid container align="center">
          <Grid xs={4}>
            <Paper
              className="paper"
              style={{ borderRadius: "10%" }}
              elevation="10"
            >
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                Kirsan Geoffroy
                <Link href="https://github.com/Kirsan98" target="_blank">
                  <GitHubIcon className="icon icon-kirsan github-icon-kirsan" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/kirsan-geoffroy-2a269a221/"
                  target="_blank"
                >
                  <LinkedInIcon className="icon icon-kirsan linkedin-icon-kirsan" />
                </Link>
              </Typography>
              <Typography style={{ marginRight: "10%" }}>
                Développeur
              </Typography>
              <Divider className="divider divider-kirsan" />
              <Typography
                className="typography-activities"
                variant="overline"
                style={{ marginRight: "2%" }}
              >
                Aimer faire la fête
              </Typography>
            </Paper>
          </Grid>

          <Grid xs={4}>
            <Paper
              className="paper"
              elevation="10"
              style={{ borderRadius: "10px" }}
            >
              <Typography style={{ fontWeight: "bold" }}>
                Valentin Flegon
                <Link href="https://github.com/valentinflegon" target="_blank">
                  <GitHubIcon className="icon icon-valentin github-icon-valentin" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/valentin-flegon/"
                  target="_blank"
                >
                  <LinkedInIcon className="icon icon-valentin linkedin-icon-valentin" />
                </Link>
              </Typography>
              <Typography style={{ marginRight: "190px" }}>
                Développeur
              </Typography>
              <Divider className="divider divider-valentin" />
              <Typography
                className="typography-activities"
                variant="overline"
                style={{ marginRight: "110px" }}
              >
                Aimer faire bronzette
              </Typography>
            </Paper>
          </Grid>
          <Grid xs={4}>
            <Paper
              className="paper"
              elevation="10"
              style={{ borderRadius: "10px" }}
            >
              <Typography variant="p" className="typography-name">
                Louis Duplantier
                <Link href="https://github.com/chtoudi" target="_blank">
                  <GitHubIcon className="icon icon-louis github-icon-louis" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/louis-duplantier-a99778221/"
                  target="_blank"
                >
                  <LinkedInIcon className="icon icon-louis linkedin-icon-louis" />
                </Link>
              </Typography>
              <Typography variant="p" style={{ marginRight: "195px" }}>
                Développeur
              </Typography>
              <Divider className="divider divider-louis" />
              <Typography
                className="typography-activities"
                variant="overline"
                style={{ marginRight: "95px" }}
              >
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

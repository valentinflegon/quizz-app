import React from "react";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Avatar,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import "../styles/components/_navbar.scss";
import { useAppContext } from "../lib/contextLib";

// const pages = ["LeaderBoard"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const isLogged = useAppContext();
  const { userHasAuthenticated } = useAppContext();

  const handleOpenNavMenu = (event) => {
    console.log("Clicked on open navMenu");
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    console.log("Clicked on open userMenu");
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    console.log("Clicked on close nav menu");
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    console.log("Clicked on close user menu");
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    userHasAuthenticated(false);
  };

  return isLogged.isAuthenticated ? (
    <div className='navbar1'>
      <AppBar className='navbar' position="static">
        <Container className="navbar" maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <div className="logo">
                <NavLink to="/">
                  <img src={logo} alt="logo" />
                </NavLink>
              </div>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink className="menu-leaderboard" to="/leaderboard">
                    <p>Leaderboard</p>
                  </NavLink>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <div className="logo">
                <NavLink to="/">
                  <img src={logo} alt="logo" />
                </NavLink>
              </div>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <NavLink className="leaderboard" to="/leaderboard">
                <p>Leaderboard</p>
              </NavLink>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key={settings[0]} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{settings[0]}</Typography>
                </MenuItem>
                <MenuItem key={settings[1]} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{settings[1]}</Typography>
                </MenuItem>
                <MenuItem key={settings[2]} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{settings[2]}</Typography>
                </MenuItem>
                <MenuItem key={settings[3]} onClick={handleLogout}>
                  <Typography textAlign="center">{settings[3]}</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  ) : (
    //isLogged flase
    <div className='navbar1'>
      <AppBar position="static">
        <Container className="navbar" maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <div className="logo">
                <NavLink to="/">
                  <img src={logo} alt="logo" />
                </NavLink>
              </div>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink className="menu-leaderboard" to="/leaderboard">
                    <p>Leaderboard</p>
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink className="menu-login" to="/login">
                    <p>Connexion</p>
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink className="menu-signin" to="signin">
                    <p>Inscription</p>
                  </NavLink>
                </MenuItem>
              </Menu>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <div className="logo">
                <NavLink to="/">
                  <img src={logo} alt="logo" />
                </NavLink>
              </div>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <NavLink className="leaderboard" to="/leaderboard">
                <p>Leaderboard</p>
              </NavLink>

              <div className="navbar-sign">
                <NavLink to="/login">
                  <p>Connexion</p>
                </NavLink>
                <NavLink to="signin">
                  <button className="navbar-signup_button" type="button">
                    Inscription
                  </button>
                </NavLink>
              </div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default NavBar;

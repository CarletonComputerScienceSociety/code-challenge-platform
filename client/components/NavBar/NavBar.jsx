import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { ThemeSwitch } from '../ThemeSwitch';
import { useState, useContext } from "react";
import { QuestionsModeContext } from '../../pages/questions';
import { MainQuestionModeContext } from '../../pages/questions/[id]';
import { EventsModeContext } from '../../pages/events';

const pages = ['home', 'events', 'questions'];

const NavBar = () => {
  // use state for menu popper
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [darkMode, setDarkMode] = useContext(QuestionsModeContext);
  const [darkModeMain, setDarkModeMain] = useContext(MainQuestionModeContext);
  const [darkModeEvent, setDarkModeEvent] = useContext(EventsModeContext);

  const handleChangeMode = () => {
    if (setDarkMode) {
      setDarkMode(!darkMode);
    }

    if (setDarkModeMain) {
      setDarkModeMain(!darkModeMain);
    }
    if (setDarkModeEvent) {
      setDarkModeEvent(!darkModeEvent);
    }
  }

  const checkedMode = () => {
    if (darkMode) {
      return darkMode;
    }

    if (darkModeMain) {
      return darkModeMain;
    }

    if (darkModeEvent) {
      return darkModeEvent;
    }
  }

  const currentMode = checkedMode();

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar>
          {/* responsive mobile(xs): menu hamburger pops dropdown pages */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu-hamburger"
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link key={page} href={`/${page}`}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.toUpperCase()}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', color: 'text.primary' } }}
          >
            CCSS LOGO
          </Typography>

          {/* responsive md and lg: pages on navigation bar*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page} href={`/${page}`}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, mx: 1, color: 'text.primary', display: 'block' }}
                >
                  {page.toUpperCase()}
                </Button>
              </Link>
            ))}
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'block', color: 'text.primary' } }}
          >
            CCSS LOGO
          </Typography>
          <ThemeSwitch checked={currentMode || false} onChange={handleChangeMode} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export { NavBar };
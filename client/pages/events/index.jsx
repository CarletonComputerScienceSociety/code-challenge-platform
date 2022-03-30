import * as React from 'react';
import { Container, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavBar } from '../../components/NavBar';
import { EventCard } from '../../components/EventCard';
import { useState, createContext, useEffect } from "react";


const EventsModeContext = createContext({ toggleColorMode: () => { } });
export default function BasicList() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: 'rgba(255, 255, 255, 0.04)'
      }
    }
  });
  const lightTheme = createTheme({ palette: { mode: 'light' } });

  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    const mode = localStorage.getItem("mode");
    // set mode
    console.log(`get localStore ${mode}`);
    if (mode !== null) {
      setDarkMode(mode === "true");
    }
  }, []);

  const _setDarkMode = (newmode) => {
    console.log(`set localStore ${newmode}`);
    localStorage.setItem("mode", newmode);
    setDarkMode(newmode);
  };


  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Paper sx={{ height: '100%', width: '100%', minHeight: '100vh' }}>
        <EventsModeContext.Provider value={[darkMode, _setDarkMode]}>
          <NavBar />
        </EventsModeContext.Provider>

        <Container sx={{ mt: 10, width: '100%', bgcolor: 'background.paper' }}>
          <EventCard />
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

export {EventsModeContext};
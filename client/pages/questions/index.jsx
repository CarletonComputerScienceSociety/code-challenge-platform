import Head from 'next/head'
import { QuestionCard } from '../../components/QuestionCard'
import * as React from "react";
import 'typeface-roboto'
import {NavBar} from '../../components/NavBar';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import {Container, Grid, Paper} from '@mui/material';
import { QUESTIONS_EXAMPLE } from '../../data/question.data'
import { useState, createContext, useEffect } from "react";
import {HeaderAnimation} from '../../components/HeaderAnimation'
import {getQuestions} from '../../services/getQuestions';
import useMediaQuery from '@mui/material/useMediaQuery';

const QuestionsModeContext = createContext({ toggleColorMode: () => {} });

export default function Questions({data}) {
  const darkTheme = createTheme({ 
    palette: { 
      mode: 'dark', 
      background:{
        default: 'rgba(255, 255, 255, 0.04)'
  }} });
  const lightTheme = createTheme({ palette: { mode: 'light' } });

  //const prefersDarkMode = useMediaQuery("(prefers-color-scheme:dark)");
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    const mode = localStorage.getItem("mode");
    // set mode
    console.log(`get localStore ${mode}`);
    if (mode !== null) {
      setDarkMode(mode==="true");
    }
  }, []);

  const _setDarkMode = (newmode) => {
    console.log(`set localStore ${newmode}`);
    localStorage.setItem("mode", newmode);
    setDarkMode(newmode);
  };
 

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme} >
      <Paper sx={{height:'100%', width:'100%', minHeight:'100vh'}}>
        <QuestionsModeContext.Provider value={[darkMode, _setDarkMode]}>
          <NavBar />
        </QuestionsModeContext.Provider>
{/* 
        <div style={{height:"60vh", textAlign:"center", lineHeight:'40vh'}}>
            placeholder
        </div> */}
        <Container maxWidth='xl'>
          <Grid container sx={{justifyContent:'center', alignItems: 'center'}}>
            <Grid item key={'lottie'}>
                <HeaderAnimation />
            </Grid>
          </Grid>
          {JSON.stringify(data)}
        </Container>

        <Container maxWidth='xl'>
          <Grid container sx={{justifyContent:'space-around', alignItems: 'center'}}>
          {QUESTIONS_EXAMPLE.map((question) => (
            <Grid item key={question.id} md={4} xl={3} zeroMinWidth sx={{display:'flex', justifyContent:'center', my:1}}>
              <QuestionCard id={question.id} title={question.title} difficulty= {question.difficulty} description= {question.body}/>
            </Grid>
          ))}
          </Grid>
        </Container>
      </Paper>
    </ThemeProvider>

  )
}
export const getServerSideProps = async () => {
  const data = await getQuestions();

  return {
    props: { data }
  };
};
export {QuestionsModeContext};
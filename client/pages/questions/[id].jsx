import { useRouter } from 'next/router'
import { MainQuestion } from '../../components/MainQuestion'
import 'typeface-roboto'
import { NavBar } from '../../components/NavBar';
import { QUESTIONS_EXAMPLE } from '../../data/question.data'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, createContext, useEffect } from "react";
import { Paper } from '@mui/material';


const MainQuestionModeContext = createContext({ toggleColorMode: () => { } });

export default function Question() {
  const router = useRouter();
  const { id } = router.query;
  const [question] = QUESTIONS_EXAMPLE.filter((q) => q.id == id);

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

      <Paper sx={{ height: '100%', width: '100%', minHeight: '100vh' }}>
        <MainQuestionModeContext.Provider value={[darkMode, _setDarkMode]}>
          <NavBar />
        </MainQuestionModeContext.Provider>
        <MainQuestion id={id} expired={question.expiration_date < "2021-06-01"} title={question.title}
          mediaField={question.imgSrc} body={question.body} answer={question.answer} />
      </Paper>
    </ThemeProvider>

  )
}

export { MainQuestionModeContext }
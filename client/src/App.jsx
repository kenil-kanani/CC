import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar'
import Home from './components/Home'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3', // Set your primary color
    },
    secondary: {
      main: '#FFFFFF', // Set your secondary color
    },
  },
  typography: {
    fontFamily: [
      'Lato', 'Helvetica', 'Arial', "sans - serif",
      'Montserrat', 'Helvetica', 'Arial', "sans - serif",
    ].join(','),
  }
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Home/>
      </ThemeProvider>
    </>
  )
}

export default App
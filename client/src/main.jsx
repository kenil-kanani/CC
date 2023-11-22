import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material'
import App from './App.jsx'
import './index.css'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lato',
      'Montserrat',
      'sans-serif',
    ].join(','),
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

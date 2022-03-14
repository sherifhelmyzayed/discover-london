import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Map from './Pages/Map'


const mainTheme = createTheme({
  palette: {
    // essam choose of color set is presented here:
    primary: {
      main: '#0c2442',
      light: '#4f7492'
    },
    secondary: {
      main: '#4f5a71'
    },
    purple: {
      main: '#17152e'
    },
    newColor: {
      main: "#fffff"
    },
    white: '#ffffff'
  },

  // Typography should be edit according to layout
  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 100,
    fontWeightRegular: 200,
    fontWeightMedium: 200,
    fontWeightBold: 800,
    fontSize: 24,
    lineHeight: '50',
    h1: {
      fontSize: 30,
    },
    subtitle1: {
      fontSize: 25
    },
    // body1 body subtitle1 subtitle2 caption button overline
  }

})
function App() {
  return (

      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>

  )
}

export default App;
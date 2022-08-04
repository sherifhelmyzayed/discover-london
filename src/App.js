import './App.css';
import { createContext, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material/styles'

import Home from './Pages/Home';
import PropertyV2 from './Pages/Property page dynamic/Property';
import DashboardModule from './module/DashboardModule';
import Discover from './Pages/Discover';
import NavBar from './Components/NavigationBar/NavBar';

export const ThemeContext = createContext();


const mainTheme = createTheme({
  palette: {
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
    ofwhite: '#ffffff',
    light: '#f7f7f7',
    grey1: '#efefef',
    red: "#FF0000",
  },

  typography: {
    fontFamily: 'Montserrat',
    fontWeightRegular: 500,
    fontWeightMedium: 400,
    fontWeightBold: 800,
    fontSize: 12,
    lineHeight: '50',
    h1: {
      fontSize: 30,
    },
    h5: {
      fontWeight: 900,
      fontSize: 22
    },
    p: {
      fontFamily: 'Lato',
    },
    h2: {

    },
    essamText: {
      fontFamily: 'syne'
    },
    headline: {
      fontFamily: 'syne',
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#0c2442'
    }, logo: {
      fontFamily: 'syne',
      fontSize: '1.2rem',
      fontWeight: 700,
      color: 'white'
    }
    ,
    subtitle1: {
      fontFamily: 'lato',
      fontWeight: 500,
      fontSize: 14
    },
    subtitle6: {
      fontFamily: 'lato',
      fontWeight: 500,
      fontSize: 15,
      color: '#0c2442'
    }, subtitle7: {
      fontFamily: 'lato',
      fontWeight: 600,
      fontSize: 15,
      color: '#4f5a71'
    },
    subtitle2: {
      fontFamily: 'lato',
      fontWeight: 700,
      fontSize: 13
    },
    subtitle3: {
      fontFamily: 'lato',
      fontWeight: 700,
      fontSize: 17
    },
    subtitle4: {
      fontFamily: 'Montserrat',
      fontWeight: 500,
      fontSize: 16,
    },
    subtitle5: {
      fontFamily: 'lato',
      fontWeight: 500,
      fontSize: 12
    },
    OVERLINE: {
      fontFamily: 'Montserrat',
      fontWeight: 900,
      fontSize: 13
    },
    headerItem: {
      fontFamily: 'lato',
      fontWeight: 600,
      marginLeft: 30,
      marginRight: 30,
      fontSize: 12
    },
    clickable: {
      fontFamily: 'Montserrat',
      fontWeight: 900,
      fontSize: 11,
      marginTop: 10,
      '&:hover': {
        cursor: 'pointer'
      },
    }
  }

})

function App() {

  return (

    <Suspense fallback={<h1>LOOOOOOOOOOAAADINGGGG</h1>}>
        <ThemeProvider theme={mainTheme}>
          <ThemeContext.Provider value={{ mainTheme }}>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="dashboard/*" element={<DashboardModule />} />
                <Route path="propertyv2/:id" element={<PropertyV2 />} />
                <Route path="/discover" element={<Discover />} />
              </Routes>
            </BrowserRouter>
          </ThemeContext.Provider>
        </ThemeProvider>
    </Suspense>
  )
}

export default App;
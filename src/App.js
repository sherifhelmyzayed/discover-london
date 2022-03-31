import './App.css';
import { createContext, Suspense, useState, useEffect, useMemo } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Home from './Pages/Home';
import PropertyV2 from './Pages/Property page dynamic/Property';
import BecomeHost from './Pages/BecomeHost';
import DashboardModule from './module/DashboardModule';
import Mainpage from './Components/MapPage/MapBox/mainpage'
import SignUpForm from './Pages/SignUpForm';
import LogInForm from './Pages/LogInForm';
import UserEditProfile from './Pages/UserEditProfile.jsx';
import Discover from './Pages/Discover';
import UserProfile from './Components/UserProfile/UserProfile';
import LogInModal from './Components/Buttons/form/LogInModal'
import NavBar from './Components/NavigationBar/NavBar';
import UserResravation from './Pages/UserResravtion';





export const ThemeContext = createContext();
export const UserContext = createContext();




const mainTheme = createTheme({
  palette: {
    // essam choice of color set is presented here:
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

  // Typography should be edit according to layout
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


    // body1 body subtitle1 subtitle2 caption button overline
  }

})

function App() {
  const [user, setUser] = useState({ auth: false, id: null });
  const [token, setToken] = useState({ token: '' });
  // const ChangeState = ()=>{
  //   setUser({...user})
  // }
  const UserValue = useMemo(
    () => ({
      user, setUser, token, setToken
    }),
    [user]
  );

  return (

    <Suspense fallback={<h1>LOOOOOOOOOOAAADINGGGG</h1>}>
      <UserContext.Provider value={UserValue}>
        <ThemeProvider theme={mainTheme}>
          <ThemeContext.Provider value={{ mainTheme }}>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="dashboard/*" element={<DashboardModule />} />
                <Route path="propertyv2/:id" element={<PropertyV2 />} />
                <Route path="/hosting" element={<BecomeHost />} />
                <Route path="mapbox" element={<Mainpage />} />
                <Route path="/discover" element={<Discover />} />
                <Route path="/sign-up" element={<SignUpForm />} />
                <Route path="/edit-profile" element={<UserEditProfile />} />
                {/* <Route path="/log-In" element={<LogInForm />} /> */}
                <Route path="/log_In" element={<LogInModal />} />
                <Route path="/Reservaiton" element={<UserResravation />} />
                <Route path="/user-profile" element={<UserProfile />} />
              </Routes>
            </BrowserRouter>
          </ThemeContext.Provider>
        </ThemeProvider>
      </UserContext.Provider>
    </Suspense>
  )
}

export default App;
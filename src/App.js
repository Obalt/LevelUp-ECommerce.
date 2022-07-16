import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from "./Home"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from './Login'; 
import Payment from "./Payment";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';




function App() {
  const [{}, dispatch] = useStateValue(); 

  useEffect (() => {

    auth.onAuthStateChanged(authUser => {
      console.log("The user is >>>", authUser);

      if(authUser){

        dispatch ({
          type:'SET_USER',
          user: authUser
        })

      }else {

        dispatch({
          type: 'SET_USER', 
          user: null
        })

      }
    })

  }, [])
  return (
    <Router>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />

        <Route
          path='/checkout'
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/payment' element={<> <Header /> <Payment /> </>}

        />
        
      </Routes>
    </Router>
  );
  }
export default App;

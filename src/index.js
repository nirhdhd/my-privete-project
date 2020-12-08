import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { StylesProvider } from "@material-ui/core";

//components
import Login from "./components/login/login_component.jsx";
import Register from "./components/register/register_component.jsx";
import Home from "./components/home/home_component";
import Step_One from "./components/createWorksheet/step_one";
import Step_Two from "./components/createWorksheet/step_two";
import OneWord from "./components/oneWord/oneWord"
import User_profile from "./components/user_profile/user_profile"
// import Step_Three from "./components/createWorksheet/step_three";
//react-router

//redux staff
import { Provider } from "react-redux";
import store from './redux/store'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";


function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    checkIfUserLogin();
  });


  const checkIfUserLogin = () => {
    //localStorage.setItem('myCoockies', 123);
    var c = localStorage.getItem('myCoockies');
    if (c == 123) {
      setLoggedIn(true);
    }

  }
  //localStorage.setItem('myCoockies');


  return (
    <Router>
      <Switch>

        <Route path="/oneword">
          <OneWord />
        </Route>
        <Route path="/user_profile">
          <User_profile />
        </Route>
        <Route path="/login">
          {loggedIn ? <Redirect to="/home" /> : <Login />}
        </Route>
        <Route path="/register">
          {loggedIn ? <Redirect to="/home" /> : <Register />}

        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/step_one">
          <Step_One />
        </Route>
        <Route path="/step_two">
          <Step_Two />
        </Route>
        <Route path="/">
          <Step_Two />
        </Route>

      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

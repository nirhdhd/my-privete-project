import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { StylesProvider } from "@material-ui/core";

//components
import Login from "./components/login/login_component.jsx";
import Register from "./components/register/register_component.jsx";
import Home from "./components/home/home_component";
import StepOne from "./components/createWorksheet/stepOne";
import StepTwo from "./components/createWorksheet/stepTwo";
// import StepThree from "./components/createWorksheet/stepThree";
//react-router

//redux staff
import { Provider } from "react-redux";
import store from './redux/store'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/">
          <Login />
        </Route> */}

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/stepOne">
          <StepOne />
        </Route>
        <Route path="/stepTwo">
          <StepTwo />
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

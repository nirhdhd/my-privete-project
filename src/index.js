import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { StylesProvider } from "@material-ui/core";

//components
import Login from "./components/login/login_component.jsx";
import Register from "./components/register/register_component.jsx";

//react-router
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      ,
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

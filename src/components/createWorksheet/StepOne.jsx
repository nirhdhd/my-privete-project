import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import "./StepOne.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Home from "@material-ui/icons/Home";



function StepOne() {
  let history = useHistory();
  const [textVal, setTextVal] = useState("");

  const foo = () => {
    //console.log("textVal", textVal);
    history.push("/stepTwo", { textVal: textVal })
  }

  const backToHomepage = () => {

    history.push("/home");

  }

  return (
    <div className="divStyle">
      <Card className="cardStyle_home">
        <AppBar className="appbar" position="static">
          <Toolbar className="Toolbar">
            <Typography variant="h6">name of the app</Typography>

            <IconButton onClick={backToHomepage} edge="start" color="inherit" aria-label="menu">
              <Home />
            </IconButton>
          </Toolbar>
        </AppBar>

        <h1>step one</h1>
        <h2>Enter the choosen text:</h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          {" "}
          <textarea
            onChange={(e) => setTextVal(e.target.value)}
            rows="18"
            className="textArea_class"
          ></textarea>
          <Button onClick={foo} className="buttonStyle_sOne">
            continue
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default StepOne;

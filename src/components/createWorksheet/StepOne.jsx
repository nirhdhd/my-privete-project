import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import "./StepOne.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function StepOne() {
  return (
    <div className="divStyle">
      <Card className="cardStyle_home">
        <AppBar className="appbar" position="static">
          <Toolbar className="Toolbar">
            <Typography variant="h6">name of the app</Typography>
            <Button color="inherit">logout</Button>
          </Toolbar>
        </AppBar>

        <h1>step one</h1>
        <h2>Enter the choosen text:</h2>

        <TextField
          className="TextField_stepOne"
          style={{ backgroundColor: "white" }}
          label="your text here"
          variant="outlined"
          multiline
          rows={24}
        />
      </Card>
    </div>
  );
}

export default StepOne;

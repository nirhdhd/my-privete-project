import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import "./home_component.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { yellow } from "@material-ui/core/colors";

function Home() {
  return (
    <div className="divStyle">
      <Card className="cardStyle_home">
        <AppBar className="appbar" position="static">
          <Toolbar className="Toolbar">
            <Typography variant="h6">name of the app</Typography>
            <Button color="inherit">logout</Button>
          </Toolbar>
        </AppBar>

        <h1>Welcome username</h1>

        <Card className="buttons_class">
          <Button className="buttonStyle">create worksheet</Button>
          <Button className="buttonStyle">user profile</Button>
          <Button className="buttonStyle">create worksheet</Button>
        </Card>
      </Card>
    </div>
  );
}

export default Home;

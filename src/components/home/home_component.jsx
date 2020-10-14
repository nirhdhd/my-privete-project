import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import "./home_component.scss";
import Button from "@material-ui/core/Button";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";


function Home() {

  let history = useHistory();

  const logout = () => {
    localStorage.removeItem('myCoockies');
    history.push("/login");
  }

  const goToStepOne = () => {
    history.push("/stepOne");
  }

  return (
    <div className="divStyle">
      <Card className="cardStyle_home">
        <AppBar className="appbar" position="static">
          <Toolbar className="Toolbar">
            <Typography variant="h6">name of the app</Typography>
            <Button onClick={logout} variant="outlined" color="inherit">logout</Button>
          </Toolbar>
        </AppBar>

        <h1>Welcome username</h1>
        <h1>currentUser</h1>
        <Card className="buttons_class">
          <Button onClick={goToStepOne} className="buttonStyle">create worksheet
          </Button>
          <Button className="buttonStyle">user profile</Button>
          <Button className="buttonStyle">create worksheet</Button>
        </Card>
      </Card>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Home);


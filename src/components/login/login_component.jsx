import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import "./login_component.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Login() {
  return (
    <div className="divStyle">
      <Card className="cardStyle">
        <h1>Login</h1>

        <div className="foo">
          <TextField
            style={{ width: "350px", margin: "auto" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <div className="divider"></div>
          <TextField
            style={{ width: "350px", margin: "auto" }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
        </div>
        <div className="divider"></div>

        <div className="foo2">
          <Button className="buttonStyle" variant="contained">
            sighn in
          </Button>
          <a
            className="linkStyle"
            href="https://reactjs.org/docs/hooks-overview.html"
          >
            not register yet? click here{" "}
          </a>
        </div>
      </Card>
    </div>
  );
}

export default Login;

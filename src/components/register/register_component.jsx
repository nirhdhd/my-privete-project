import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import "./register_component.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Axios from "axios";

import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [helpertxt, setHelpertxt] = useState("");
  const [error, setError] = useState(false);

  const checkUserRegister = () => {
    console.log(username, email, password);

    if (username == '' || email == '' || password == '') {

      setHelpertxt("one of the details missing");
      return;
    }
    else {
      setHelpertxt("");
    }

    Axios.post("http://localhost:5000/login/register", {
      username: username,
      email: email,
      password: password,
    }).then((res) => {
      console.log("response from server (client side)", res.data);

      if (res.data == false) {
        setError(true);
        setHelpertxt("this user allready exist!");
      } else {
        setError(false);
        setHelpertxt("");
      }
    });
  };

  return (
    <div className="divStyle_register">
      <Card className="cardStyle">
        <h1>Register</h1>

        <div className="foo">
          <TextField
            error={error}
            style={{ width: "350px", margin: "auto" }}
            id="username"
            label="username"
            variant="outlined"
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <div className="divider"></div>
          <TextField
            error={error}
            style={{ width: "350px", margin: "auto" }}
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="divider"></div>
          <TextField
            // error={error}
            //helperText={helpertxt}
            style={{ width: "350px", margin: "auto" }}
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="helperText" >{helpertxt}</div>
        <div className="divider"></div>

        <div className="foo2">
          <Button
            onClick={checkUserRegister}
            className="buttonStyle"
            variant="contained"
          >
            confirm
          </Button>

          <Link to="/login"> registered allredy? click here </Link>
        </div>
      </Card>
    </div>
  );
}

export default Register;

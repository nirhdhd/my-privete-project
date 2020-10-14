import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import "./login_component.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Axios from "axios";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { setCurrentUser } from '../../redux/user/user.actions';
import Try from './try_component';
import { useHistory } from "react-router-dom";



function Login(props) {

  let history = useHistory()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [helpertxt, setHelpertxt] = useState("");
  const [error, setError] = useState(false);
  const [user, setUser] = useState(false);


  const checkUserLogin = () => {
    //console.log(email, password);

    Axios.post("http://localhost:5000/login/login", {
      email: email,
      password: password,
    }).then((res) => {
      console.log(res.data);
      props.setCurrentUser(res.data);

      if (res.data == false) {

        setError(true);
        setHelpertxt("There is a problem with the data entered ");

      } else {

        localStorage.setItem('myCoockies', 123);
        history.push("/home");//NIR-DEV
        setError(false);
        setHelpertxt("");
      }
    });
  };

  return (
    <div className="divStyle_login">
      <Card className="cardStyle">
        <h1>Login</h1>
        <Try></Try>
        <div className="foo">
          <TextField
            error={error}
            style={{ width: "350px", margin: "auto" }}
            id="email"
            label="Email"
            variant="outlined"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="divider"></div>
          <TextField
            type='password'
            error={error}
            helperText={helpertxt}
            style={{ width: "350px", margin: "auto" }}
            id="Password"
            label="Password"
            variant="outlined"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="divider"></div>

        <div className="foo2">
          <Button
            onClick={checkUserLogin}
            className="buttonStyle"
            variant="contained"
          >
            sighn in
          </Button>
          <Link to="/register"> not register yet? click here </Link>
        </div>
      </Card>
    </div>
  );
}



const mapDispatchToProps = disptch => ({
  setCurrentUser: user => disptch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(Login);

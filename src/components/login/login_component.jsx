import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import "./login_component.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [helpertxt, setHelpertxt] = useState("");
  const [error, setError] = useState(false);

  /// save this -its work :)
  // const checkUserForLogin = () => {
  //   fetch("http://localhost:5000/users/", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "GET",
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });

  const checkUserForLogin = () => {
    console.log(email, password);

    Axios.post("http://localhost:5000/login/", {
      email: email,
      password: password,
    }).then((res) => {
      console.log(res.data);

      if (res.data == false) {
        setError(true);
        setHelpertxt("There is a problem with the data entered ");
      } else {
        setError(false);
        setHelpertxt("");
      }
    });

    // fetch("http://localhost:5000/login/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email: email, password: password }),
    // }).then((res) => {
    //   console.log("foo:", res);
    // });
  };

  return (
    <div className="divStyle">
      <Card className="cardStyle">
        <h1>Login</h1>

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
            onClick={checkUserForLogin}
            className="buttonStyle"
            variant="contained"
          >
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

import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Home from "@material-ui/icons/Home";
import "./step_one.scss";
import { connect } from 'react-redux'


function Step_One({ textMatrix, dispatch }) {
  let history = useHistory();
  const [textVal, setTextVal] = useState("");

  const foo = () => {
    history.push("/step_two", { textVal: textVal })
  }



  const splitText = () => {
    let words;
    let rows = textVal.split("\n");
    let summeryMetrix = new Array([]);

    let wordsIndex = 0;
    for (const row of rows) {
      let index = 0;
      words = row.split(" ").concat();

      words = words.map(val => {
        wordsIndex++;
        return { index: wordsIndex, text: val }
      }
      )
      summeryMetrix[index].push(words);
      index++;
    }
    //fix exist problem with the matrix
    summeryMetrix = summeryMetrix[0];
    console.log('summeryMetrix', summeryMetrix);
    return summeryMetrix;
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

const mapStateToProps = state => ({
  textMatrix: state.textMatrix
})

export default connect(mapStateToProps)(Step_One);

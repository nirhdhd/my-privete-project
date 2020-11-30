import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import "./stepTwo.scss";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Home from "@material-ui/icons/Home";
import { Link, useHistory, useLocation } from "react-router-dom";
import $ from 'jquery'
import OneWord from '../oneWord/oneWord'

// const textVal =
//   `Lorem Ipsum is simply 
// typesetting industry.
// standard dummy text ever 
// printer took a galley`;




function StepTwo(props) {


  const [elementss, setElementss] = useState([]);

  let history = useHistory();
  const location = useLocation();
  const elementssTemp = []
  let textVal;

  useEffect(() => {
    if (location.state != undefined)
      textVal = (location.state).textVal || "";
  });

  const goBack = () => {
    history.push("/stepOne");
  };

  const splitText = () => {

    let wordKey = 0;
    let words;
    let rows = textVal.split("\n");
    let summeryMetrix = new Array([]);

    for (const row of rows) {
      let i = 0;
      words = row.split(" ").concat();
      summeryMetrix[i].push(words);
      i++;
    }
    //fix exist problem with the matrix
    summeryMetrix = summeryMetrix[0];

    console.log('summeryMetrix', summeryMetrix);

    for (let i = 0; i < summeryMetrix.length; i++) {

      let elementssTempArry = [];

      for (let z = 0; z < summeryMetrix[i].length; z++) {

        let word = summeryMetrix[i][z];
        let id = i + z;
        console.log(id, word);
        const element = (<OneWord key={id} id={id} word={word} />);
        elementssTempArry.push(element);
      }
      elementssTemp.push(<div style={{ display: "flex", flexDirection: "row" }}>{elementssTempArry}</div>);
    }
    setElementss(elementssTemp);
  }

  return (
    <div className="stepTwo_divStyle">
      <Card className="stepTwo_cardStyle_home">
        <AppBar className="stepTwo_appbar" position="static">
          <Toolbar className="Toolbar">
            <Typography variant="h6">name of the app</Typography>

            <IconButton edge="start" color="inherit" aria-label="menu">
              <Home />
            </IconButton>
          </Toolbar>
        </AppBar>
        <h1>step Two</h1>
        <h2>choose the words you want</h2>

        <Button
          style={{ width: '500px', alignSelf: 'center', backgroundColor: '#f4a261' }}
          variant="contained"
          onClick={splitText}>splitText
        </Button>

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
          <div className="elemnts_div"> {elementss}  </div>

          {/* <textarea rows="15" className="textArea_class"></textarea>
          <textarea rows="2" className="textArea_class"></textarea> */}
          <div>
            {" "}
            <Button onClick={goBack} className="stepTwo_buttonStyle_sOne">back</Button>
            <Button className="stepTwo_buttonStyle_sOne">continue</Button>
          </div>
        </div>

      </Card>

      <div id="roo" ></div>
    </div>
  );
}

export default StepTwo;

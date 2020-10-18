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
const text =
  `Lorem Ipsum is simply 
typesetting industry.
standard dummy text ever 
printer took a galley`;




function StepTwo(props) {

  let history = useHistory();
  const location = useLocation();
  let textVal;
  // const [textVal, setTextVal] = useState("");
  //const textVal = (location.state).textVal;

  useEffect(() => {
    if (location.state != undefined)
      textVal = (location.state).textVal || "";
  });

  const goBack = () => {
    history.push("/stepOne");
  };


  const fooo = (x) => {
    console.log(x);
  }



  const splitText = () => {

    console.log(textVal);

    let words;
    let rows = text.split("\n");
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
    console.log('summeryMetrix[0]', summeryMetrix[0]);




    // setTextVal(summeryMetrix[0].map((x, i) =>

    //   <div style={{ display: 'flex', flexDirection: 'row' }}
    //     className="doo"
    //     onClick={fooo(this)}
    //     key={i}
    //     style={{
    //       width: '100px',
    //       height: '30px',
    //       backgroundColor: '#F7D08A',
    //       margin: '10px'
    //     }}>{x}</div>

    // ))

    $("#roo").append('<h1>hellow</h1>');

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
          <textarea rows="15" className="textArea_class"></textarea>
          <textarea rows="2" className="textArea_class"></textarea>
          <div>
            {" "}
            <Button onClick={goBack} className="stepTwo_buttonStyle_sOne">back</Button>
            <Button className="stepTwo_buttonStyle_sOne">continue</Button>
          </div>
        </div>

      </Card>

      <Card style={{ height: "500px", backgroundColor: "#F0F7CA" }}>


        <div style={{ display: 'flex', flexDirection: 'row' }} id="hereee"></div>
        {textVal}
        <div style={{ fontSize: "50px" }} id="roo">123123</div>

      </Card>


    </div>
  );
}

export default StepTwo;

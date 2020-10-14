import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import "./stepTwo.scss";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Home from "@material-ui/icons/Home";
import { Link, useHistory } from "react-router-dom";

const text =
  `Lorem Ipsum is simply 
typesetting industry.
standard dummy text ever 
printer took a galley`;




function StepTwo() {
  const [textVal, setTextVal] = useState("");
  let history = useHistory();

  const goBack = () => {
    history.push("/stepOne");
  };


  const fooo = (x) => {
    console.log(x);
  }


  const splitText = () => {

    let words;
    let rows = text.split("\n");
    //let words = rows[0].split(" ").concat();
    // console.log('rows', rows);
    //console.log('words', words);

    let summeryMetrix = new Array([]);

    for (const row of rows) {
      let i = 0;
      words = row.split(" ").concat();
      summeryMetrix[i].push(words);
      i++;
    }
    summeryMetrix = summeryMetrix[0]; //fix exist problem with the matrix

    console.log('summeryMetrix', summeryMetrix);
    console.log('summeryMetrix[0]', summeryMetrix[0]);



    setTextVal(summeryMetrix[0].map((x, i) =>

      <div className="doo" onClick={fooo(this)} key={i} style={{ width: '100px', height: '30px', backgroundColor: '#F7D08A', margin: '10px' }}>{x}</div>
    )
    )


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

        {textVal}

      </Card>


    </div>
  );
}

export default StepTwo;

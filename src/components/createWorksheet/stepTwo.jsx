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

  let flag = 0;
  let textVal;
  let history = useHistory();
  const location = useLocation();

  const [wordStore, setWordStore] = useState([]);
  //const textVal = (location.state).textVal;

  useEffect(() => {
    if (location.state != undefined)
      textVal = (location.state).textVal || "";
  });

  const goBack = () => {
    history.push("/stepOne");
  };

  const onWordClick = (e) => {

    //console.log('e', e);
    //console.log(e.currentTarget)
    //console.log(e.currentTarget.innerText)
    //console.log("wordkey:", e.currentTarget.attributes.wordkey.value);

    let wordkey = e.currentTarget.attributes.wordkey.value;
    let txt = e.currentTarget.innerText;
    let tempoArray = wordStore;

    tempoArray.map((val, index) => {
      console.log('from inside', val.wordkey, wordkey);
      if (val.wordkey == wordkey) {
        //tempoArray.splice(index, 1)
        setWordStore(tempoArray);
        console.log(" after delete from wordStore in index:", index, wordStore);
        flag = 1;
      }

    });

    if (flag == 0) {
      tempoArray.push({ wordkey: wordkey, txt: txt });
      setWordStore(tempoArray);
      console.log("after add to wordStore", wordStore)
    }
  }





  const splitText = () => {

    let wordKey = 0;
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

    //console.log('summeryMetrix', summeryMetrix);
    // console.log('summeryMetrix[0]', summeryMetrix[0]);

    var contect = document.createElement('div');
    let divValue;
    //let wordKey = 0

    summeryMetrix.map(row => {

      divValue = document.createElement('div');
      row.map(word => {

        let span = document.createElement('span');
        $(span).text(word);
        $(span).addClass('oneWord');
        $(span).on('click', function (event) {
          event.preventDefault();
          onWordClick(event);

        })
        $(span).attr("wordKey", wordKey)
        $(span).attr("deleted", 0)
        wordKey++;

        $(divValue).append(span);
        $(divValue).append(" ");


      })

      $(contect).append(divValue);
      $(contect).append('\n');
    })

    $("#roo").append(contect);

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
      <div onClick={() => console.log("asdasdaasdas")}>asdasda</div>

    </div>
  );
}

export default StepTwo;

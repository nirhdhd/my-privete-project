import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import "./step_two.scss";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Home from "@material-ui/icons/Home";
import { Link, useHistory, useLocation } from "react-router-dom";
import $ from 'jquery'
import OneWord from '../oneWord/oneWord'
import { connect } from 'react-redux'
import { setTextToMatrix, setTextDictionary } from "../../redux/actions"


const textVal =
  `Lorem Ipsum is simply 
typesetting industry.
standard dummy text ever 
printer took a galley`;


function Step_Two({ textStore, textDictionary, dispatch }) {

  const [elementss, setElementss] = useState([]);
  const [_textStore, _setTextStore] = useState([]);
  const [textArray, setTextArray] = useState([]);

  let history = useHistory();
  const location = useLocation();

  //let textVal;

  useEffect(() => {

    //if (location.state != undefined)
    // textVal = (location.state).textVal || "";

    return () => {

    };

  });

  const goBack = () => {
    history.push("/step_one");
  };

  const textToArray = () => {

    let tempArray = [];
    let textArray = [];
    let index = 1;
    tempArray = textVal.split(' ')

    tempArray.forEach(element => {
      textArray.push({ index: index, text: element })
      index++;
    });

    dispatch(setTextDictionary(textArray));
    //return textArray;
  }
  const splitText = () => {
    const elementssTemp = []
    let words;
    let rows = textVal.split("\n");
    let summeryMetrix = new Array([]);

    for (const row of rows) {
      let i = 0;
      words = row.split(" ").concat();
      summeryMetrix[i].push(words);
      i++;
    }
    //importent line!
    summeryMetrix = summeryMetrix[0];
    dispatch(setTextToMatrix(summeryMetrix))

    let index = 0;
    for (let i = 0; i < summeryMetrix.length; i++) {
      let elementsTempArry = [];
      let length = summeryMetrix[i].length;
      for (let z = 0; z < length; z++) {

        let word = summeryMetrix[i][z];
        const element = (<OneWord key={index} id={index} word={word} />);
        elementsTempArry.push(element);
        index++;
      }
      elementssTemp.push(<div style={{ display: "flex", flexDirection: "row" }}>{elementsTempArry}</div>);
    }
    setElementss(elementssTemp);
    textToArray();
    console.log("textStore", textStore)
    console.log("textDictionary", textDictionary)
  }

  const updateTextStore = () => {

    // dispatch(setTextToMatrix(splitText()))
    //dispatch(setTextDictionary(textToArray(textVal)))

    if (textDictionary.length == 0) return;
    const wordsToRender = textDictionary.filter((x) => textStore.includes(x.index))

    console.log("textStore", textStore)
    console.log("textDictionary", textDictionary)
    console.log("wordsToRender", wordsToRender);

    // wordsToRender.forEach(el => {
    //   const element = (<p>el.text</p>);
    //   elementssTempArry.push(element);
    // });

    //_setTextStore(elementssTempArry);


  }
  const reset_selection = () => {

    //FIXME:: state למה אני לא מצליח לאפס את ה 
    setElementss([]);
    splitText();
    console.log(elementss);
  }

  return (
    <div className="stepTwo_divStyle">
      <Card className="top_cardStyle">
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
          style={{ width: '100px', alignSelf: 'center', backgroundColor: '#33a261' }}
          variant="contained"
          onClick={updateTextStore}>click
        </Button>
        <Button
          style={{ width: '100px', alignSelf: 'center', backgroundColor: '#666261' }}
          variant="contained"
          onClick={reset_selection}>reset words
        </Button>

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
          <div className="text_store">{_textStore}  </div>


          <div>
            {" "}
            <Button onClick={goBack} className="stepTwo_buttonStyle_sOne">back</Button>
            <Button className="stepTwo_buttonStyle_sOne">continue</Button>
          </div>
        </div>

      </Card>


    </div>
  );
}

const mapStateToProps = state => ({
  textStore: state.textStore,
  textDictionary: state.textDictionary
})

export default connect(mapStateToProps)(Step_Two);

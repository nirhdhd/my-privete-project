import React, { useState, useRef } from "react";
import { connect } from "react-redux";

import './oneWord.scss'
import { setTextStore } from "../../redux/actions"

function OneWord(props) {
    const [active, setActive] = useState(false);
    let ref = useRef();

    const clickMe = (e) => {
        let id = ref.current.id
        setActive(!active);
        console.log(id);

        props.dispatch(setTextStore(id));
        console.log('textStore', props.textStore)
    }

    return (
        <div onClick={(e) => clickMe(e)}
            className={`word_div ${active ? "clickedClass" : "#"}`}
            id={props.id}
            key={props.key}
            ref={ref}>
            {props.word}
        </div>
    )

}

const mapStateToProps = state => ({
    textStore: state.textStore
})


export default connect(mapStateToProps)(OneWord);
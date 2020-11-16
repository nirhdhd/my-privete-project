import React, { useState, useRef } from "react";
import { connect } from "react-redux";

import './oneWord.scss'


function OneWord(props) {
    const [active, setActive] = useState(false);
    let ref = useRef();

    const clickMe = (e) => {
        setActive(!active);
        console.log(ref.current.id);
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
    currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(OneWord);
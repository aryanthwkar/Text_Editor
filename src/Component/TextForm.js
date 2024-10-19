import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("write text here");

  //To take value from textarea
  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  //Convert text to UpperCase
  const toUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  //  //Convert text to LowerCase

  const toLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const Clear = () => {
    setText("");
  };
  return (
    <>
      <div
        className="container my-5"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Enter the text here</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
            value={text}
            onChange={handleOnchange}
            placeholder={props.text}
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={toUpperCase}>
          {props.upperCase}
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={toLowerCase}
        >
          {props.lowerCase}
        </button>
        <button type="button" className="btn btn-primary mx-1" onClick={Clear}>
          {props.ClearText}
        </button>
      </div>
      <div className="container">
        <p>
          Words {text.split(" ").length} Characters {text.length}
        </p>
        <p>{text.split(" ").length * 0.08} Minutes read</p>
        <h5>Preview</h5>
        <p>{text}</p>
      </div>
    </>
  );
}

/// Proptypes
TextForm.propTypes = {
  text: PropTypes.string,
};

//Default Props
TextForm.defaultProps = {
  text: "write text here",
  upperCase: "convert to UpperCase",
  lowerCase: "convert to lowerCase",
  ClearText: "Clear Text",
};

import React from "react";
import { useState } from "react";

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        if(text==='') {
            props.showAlert("Please enter some text", "info")
        } else {
            props.showAlert("Text transformed to uppercase", "success")
        }
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text transformed to lowercase","success")
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }

    const handleBoldClick = () => {
        document.querySelector(".form-control").style.fontWeight="bold"
        props.showAlert("Text transformed to bold","success")
    }

    const handleNormalClick = () => {
        document.querySelector(".form-control").style.fontWeight="normal"
        props.showAlert("Text transformed to normal","success")
    }

    const handleItalicClick = () => {
        document.querySelector(".form-control").style.fontStyle="italic"
        props.showAlert("Text transformed to italic","success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    



    const [text,setText] = useState('');
    

  return (
    <div>
        <div className="mb-3">
            <h1 className={`${props.mode === 'light' ? "text-dark" : "text-white"}`}>{props.heading}</h1>
          <textarea
            className="form-control"
            style={{
                backgroundColor: props.mode === 'light' ? "white" : "#212a57",
                color: props.mode === 'light' ? "black" : "white"
            }}
            onChange={handleOnChange}
            rows={8}
            value={text}
          />
          <button disabled={text.length === 0} onClick={handleUpClick} className="btn btn-primary my-3 mx-1" style={{
              backgroundColor: props.mode === '#8b0000' ? "#8b0000" : "blue",
                color: props.mode === 'light' ? "white" : "white"
          }}>UpperCase</button>
          <button disabled={text.length === 0} onClick={handleLoClick} className="btn btn-primary my-3 mx-1">LowerCase</button>
          <button disabled={text.length === 0} onClick={handleClearClick} className="btn btn-primary my-3 mx-1">Clear Text</button>
          <button disabled={text.length === 0} onClick={handleBoldClick} className="btn btn-primary my-3 mx-1">Bold Text</button>
          <button disabled={text.length === 0} onClick={handleNormalClick} className="btn btn-primary my-3 mx-1">Normal Text</button>
          <button disabled={text.length === 0} onClick={handleItalicClick} className="btn btn-primary my-3 mx-1">Italic Text</button>


          <h2 className={`${props.mode === 'light' ? "text-dark" : "text-white"}`}>Your text summary</h2>
          <p className={`${props.mode === 'light' ? "text-dark" : "text-white"}`}>{text.split(" " && "\n").filter((element) => element.length!==0).length} words and {text.length} characters</p>
        <p className={`${props.mode === 'light' ? "text-dark" : "text-white"}`}>{text.split(" " && "\n").filter((element) => element.length!==0).length * 0.08} Minutes read</p>
        <h3 className={`${props.mode === 'light' ? "text-dark" : "text-white"}`}>Preview</h3>
        <p className={`${props.mode === 'light' ? "text-dark" : "text-white"}`}>{text.length > 0 ? text : "Enter text in textbox to preview"}</p>
        </div>
      </div>
  );
}

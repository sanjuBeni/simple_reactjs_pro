import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event)=> {
    setText(event.target.value);
  }

  const upperCaseHandle = ()=> { 
    setText(text.toUpperCase());
  }

  const lowerCaseHandle = () => {
    setText(text.toLowerCase());
  }

  const clearCaseHandle = ()=> {
    let newText = "";
    setText(newText);
  }

  const handleCopyText = () =>{

  }

  return (
    <>
      <div style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="form-group mt-4">
          <textarea
            className="form-control"
            id="textArea"
            rows="5"
            // placeholder={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark' ? '#4a5864' : 'white', color: props.mode==='dark' ? 'white' : 'black'}}
          ></textarea>
        </div>
        <div className="mt-2">
            <button className="btn btn-primary" onClick={upperCaseHandle}>Uppercase</button>
            <button className="btn btn-warning mx-2" onClick={lowerCaseHandle}>Lowercase</button>
            <button className="btn btn-danger mx-2" onClick={clearCaseHandle}>Cleartext</button>
            <button className="btn btn-success mx-2" onClick={handleCopyText}>Copytext</button>
            <button className="btn btn-info mx-2" onClick={handleCopyText}>Remove Extra Space</button>
        </div>
        <div className="mt-2">
          <h2>Your Text Summary</h2>
          <p>Total words {text.split(" ").filter(e => e.length != 0).length} and total characters {text.length}</p>          
        </div>
        <div className="mt2">
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Write text into above textarea..."}</p>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";

const TextForms = (props) => {

  const uppercase=()=>{
    let newText=text.toUpperCase()
    setText(newText)
    }

    const clearText=()=>{
      setText("")
      }

    
  const handleOnChange=(event)=>{
    setText(event.target.value)
    }
    
  const[text,setText]=useState("")
  
  
  return (
    <>
    <div className="contain">

    <h1 >
        {props.heading}
      </h1>
    <form>
      
      <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} placeholder="Enter your text"></textarea>
    </form>
    <button className="btn btn-primary" onClick={uppercase}>Convert to uppercase</button>
    <button className="btn btn-success" onClick={clearText}>Clear</button>
    </div>

    <div className="container my-4">
      <h2>Your text summary</h2>
      <p>There are {text.split(" ").length} words, {text.length} characters</p>
      <h3>{0.008* text.split(" ").length} minutes time is taken to read all above words.</h3>
    </div>
    </>
  );
};

export default TextForms;


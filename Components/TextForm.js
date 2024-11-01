import React from 'react'
import { useState } from 'react';

const TextForm = (props) => {
    const [text, setText] = useState("");

    const upCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upper case" , "success");
    }

    const lowCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lower case", "warning");
    }

    const Clear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("cleared the text board", "info");
    };

    const Copy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("text has been copied", "danger");
    }
    
    const extraSpc = () => {
        let newText = text.split(/\s+/);
        setText(newText.join(" ").trim());
        props.showAlert("extra space has been removed", "secondary");
    };

    const handleChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className="container" style={{color: props.mode === "white" ? "dark" : "#042743"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3 my-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" value={text} onChange={handleChange} style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white", // **Change**
              color: props.mode === "dark" ? "white" : "#042743" // **Change**
            }} /*style={{backgroundColor: props.mode === "dark" ? "#13466e" : "white", color: props.mode === "dark" ?"white" : "#042743"}}*/ id="myBox" rows="8"></textarea>
                </div>
                <button type='button' disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={upCase}>Convert to upperCase</button>
                <button type='button' disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={lowCase}>Convert to lowerCase</button>
                <button type='button' disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={Clear}>clear text</button>
                <button type='button' disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={Copy}>Copy text</button>
                <button type='button' disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={extraSpc}>Remove extSpace</button>
            </div>
            <div className="container my-3" style={{color: "dark" ? "white" : "#042743"}}>
                <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => {return element.length !== 0}).length} minutes to read</p>
                <h2>preview</h2>
                <p>{text.length>0 ? text : "Nothing to preview."}</p>
            </div>
        </>
    )
}

export default TextForm;
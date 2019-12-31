import React from 'react';

const InputAndDisplay = (props) => {

    return (
        <div >

            <br></br>
            <p>Type:</p>
            <input type="text" onChange={props.changeText} value={props.content}></input>
            <p>Input Content: {props.content}</p>
            <hr></hr>
          </div>

    );
};

export default InputAndDisplay;

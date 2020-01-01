import React, { useState } from 'react';

import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';


const App = () => {


  const [inputState, setInputState] = useState({
    text: "ABC"
  });

  const inputChangeHandler = (event) => {

    let newtext = event.target.value;

    setInputState({ text: newtext });
  }

  const deleteChar = (idx) => {

    console.log("Deleting " + idx)
    let text = inputState.text.split("");
    
    text.splice(idx, 1);

    setInputState({text: text.join("")})

  }


  return (
    <div className="App">

      <ol>
        <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
        <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
        <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
        <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
        <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
        <li>When you click a CharComponent, it should be removed from the entered text.</li>
      </ol>
      <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      <hr />

      <br></br>

      <input onChange={inputChangeHandler} value={inputState.text}></input>
      <p>TEXT: {inputState.text.length}</p>

      <Validation textSize={inputState.text.length}></Validation>
      
      <hr>
      </hr>

      {inputState.text.split("").map( (letter, idx) => {
        return <Char key={idx} content={letter} deleteMe={() => deleteChar(idx)}></Char>
      })}
      

    </div>
  );
}

export default App;

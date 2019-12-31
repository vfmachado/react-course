import React, { useState } from 'react';
import './App.css';

import InputAndDisplay from './InputAndDisplay/InputAndDisplay';

const App = () => {

  const [state, setState] = useState({
    text: ["Hello", "World"]
  })

  const onChangeInputHandler = (event, index) => {

    let changedState = [...state.text];
    changedState[index] = event.target.value;
    setState({ text: changedState })

  }

  return (
    
    <div className="App">
      {state.text.map((str, idx) => {
        return (
          <InputAndDisplay
            key={idx}
            idx={idx}
            content={str}
            changeText={(event) => onChangeInputHandler(event, idx)}

          ></InputAndDisplay>
        )
      })}

    </div>
  );
}

export default App;

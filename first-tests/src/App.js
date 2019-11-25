import React, { useState } from 'react';

import './App.css';

import Person from './Person/Person';


const App = (props) => {

  const [personState, setPersonState] = useState({
    persons: [
      { name: "Vinicius", age: 28 },
      { name: "Cristiana", age: "XX", hobbies: "Artesanato" }
    ]
  });

  const [otherState] = useState("Another state");
  
  const buttonClickHandler = () => {
    console.log("Button Clicked");
    let newpersons = [
      { name: "Vinicius Machado", age: 28 },
      { name: "Cristiana Araújo", age: "XX", hobbies: "Artesanato" }
    ];

    setPersonState({ persons: newpersons })
  }

  const changeNameHandler = (event) => {

    let newpersons = [
      { name: event.target.value, age: 28 },
      { name: "Cristiana Araújo", age: "XX", hobbies: "Artesanato" }
    ];

    setPersonState({ persons: newpersons })

  }

  return (
    <div className="App">
      {/*
        <Person name="Vinicius" age="28"></Person>
        <Person name="Cristiana" age="XX">Married with Vinicius</Person>
        */}

      <Person 
        name={personState.persons[0].name} 
        age={personState.persons[0].age}
        changeName={changeNameHandler}
        click={buttonClickHandler}>
        {personState.persons[0].hobbies}
        
      </Person>
      
      <Person 
        name={personState.persons[1].name} 
        age={personState.persons[1].age}>
        {personState.persons[1].hobbies}
      </Person>

      <p>{otherState}</p>

      <button onClick={buttonClickHandler}>Click me</button>

    </div>
  );

}

export default App;

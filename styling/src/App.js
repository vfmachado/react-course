import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

import Person from './Person/Person';

//import Radium, {StyleRoot} from 'radium'

/*
const btnStyle = {
  backgroundColor: 'white',
  color: 'red',
  padding: '10px',
  width: '200px',
  cursor: 'pointer'
};
*/

const StyledButton = styled.button`
  background-color: white;
  color: red;
  padding: 10px;
  width: 200px;
  cursor: pointer;
`;

const StyledToggleButton = styled.button`

  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font-size: 16px;
  padding: 10px;
  width: 200px;
  cursor: pointer;
  :hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
  
  `;

const App = (props) => {

  const [personState, setPersonState] = useState({
    persons: [
      { id: 'id01', name: "Vinicius", age: 28 },
      { id: 'id02', name: "Cristiana", age: "XX", hobbies: "Artesanato" }
    ]
  });

  const [otherState] = useState("Another state");

  const [showState, setShowState] = useState(true)

  const buttonClickHandler = () => {
    console.log("Button Clicked");
    let newpersons = [
      { id: 'id01', name: "Vinicius Machado", age: 28 },
      { id: 'id02', name: "Cristiana Araújo", age: "XX", hobbies: "Artesanato" }
    ];

    setPersonState({ persons: newpersons })
  }

  const changeNameHandler = (event, id) => {

    
    const personIndex = personState.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...personState.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...personState.persons];
    persons[personIndex] = person;

    setPersonState({persons: persons});

  }


  const deletePersonHandler = (index) => {

    //const personsArray = personState.persons.slice();
    const personsArray = [...personState.persons]
    personsArray.splice(index, 1);

    setPersonState({ persons: personsArray });

  }

  const togglePersonsHandler = () => {

    const doesShow = showState;
    setShowState(!doesShow)

  }

/*
  const btnToggleStyle = {
    backgroundColor: 'green',
    color: 'white',
    fontSize: '16px',
    padding: '10px',
    width: '200px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  };
*/
  const PersonsDiv = () => {

    return (
      <div>
        {personState.persons.map((person, index) => {
          return <Person
            key={person.id}
            name={person.name}
            age={person.age}
            changeName={(event) => changeNameHandler(event, person.id)}
            click={() => deletePersonHandler(index)}>
            {person.hobbies}
          </Person>
        })}

      </div>
    );

  }

  let personsDiv = null;

  if (showState === true) {
    personsDiv = PersonsDiv();
    //btnToggleStyle.backgroundColor = "red";
    //btnToggleStyle[':hover'].backgroundColor = 'pink'
    //btnToggleStyle.color = "black";
  } 

  let classes = ['red', 'bold'].join(' ');

  //<StyleRoot> removed from div . the app doesn't use radium.
  return (
    
    <div className="App">
      {/*
      <Person name="Vinicius" age="28"></Person>
      <Person name="Cristiana" age="XX">Married with Vinicius</Person>
      */}

      <br></br>
      <h1>Learning React</h1>
      <p className={classes}>React is amazing</p>
      {/*
      <button style={btnToggleStyle} onClick={togglePersonsHandler}>Toggle Persons</button>
      */}

      <StyledToggleButton alt={showState} onClick={togglePersonsHandler}>
        Toggle Persons
      </StyledToggleButton>

      {personsDiv}

      <p>{otherState}</p>

      {/* 
      <button style={btnStyle} onClick={buttonClickHandler}>Click me</button>
      */}
      <StyledButton onClick={buttonClickHandler}>
        Click me
      </StyledButton>

    </div>
    
  );
}

//export default Radium(App);
export default App;

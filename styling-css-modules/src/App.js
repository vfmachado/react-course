import React, { useState } from 'react';

import styles from './App.module.css';

import Person from './Person/Person';


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
  let currentBtnStyle = [styles.ToggleButton];

  if (showState === true) {
    personsDiv = PersonsDiv();
    currentBtnStyle.push(styles.Red);
  } 


  return (
    
    <div className={styles.App}>

      <br></br>
      <h1>Learning React</h1>
      <p className={styles.bold}>React is amazing</p>
     
      <button className={currentBtnStyle.join(' ')}  onClick={togglePersonsHandler}>
        Toggle Persons
      </button>

      {personsDiv}

      <p>{otherState}</p>

      <button className={styles.Button} onClick={buttonClickHandler}>
        Click me
      </button>

    </div>
    
  );
}

//export default Radium(App);
export default App;

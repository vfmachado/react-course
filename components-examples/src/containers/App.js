import React, { Component } from 'react';

import styles from './App.module.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] Constructor');
  }

  state = {
    persons: [
      { id: 'id01', name: "Vinicius", age: 28 },
      { id: 'id02', name: "Cristiana", age: 42, hobbies: "Artesanato" },
      { id: 'id03', name: "Alexandre", age: 15, hobbies: "Vídeo games" }
    ],
    show: true
  };


  //initialize the state of a component that updates based on props getted.
  //update state based on external props.
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }


  buttonClickHandler = () => {
    console.log("Button Clicked");
    let newpersons = [
      { id: 'id01', name: "Vinicius Machado", age: 28 },
      { id: 'id02', name: "Cristiana Araújo", age: "XX", hobbies: "Artesanato" }
    ];

    this.setState({persons : newpersons});
  }


  changeNameHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons : persons});
  }


  deletePersonHandler = (index) => {

    //const personsArray = personState.persons.slice();
    const personsArray = [...this.state.persons]
    personsArray.splice(index, 1);

    this.setState({persons : personsArray});

  }

  togglePersonsHandler = () => {

    const doesShow = this.state.show;
    this.setState({show : !doesShow});

  }

  render() {

    console.log("[App.js] render")

    const PersonsDiv = () => {

      return (
        <div>
          <Persons
            persons={this.state.persons}
            changeNameHandler={this.changeNameHandler}
            deletePersonHandler={this.deletePersonHandler}
          ></Persons>
        </div>
      );
  
    }
  

    let personsDiv = null;

    if (this.state.show === true) {
      personsDiv = PersonsDiv();
    }

    return (<div className={styles.App}>

      <Cockpit
        showPersons={this.state.show}
        togglePersons={this.togglePersonsHandler}
        buttonClick={this.buttonClickHandler}
      ></Cockpit>

      {personsDiv}

    </div>)

  }
}

//export default Radium(App);
export default App;

import React from 'react';

import Person from './Person/Person'

const Persons = (props) =>  {

    console.log("[Persons.js] rendering...")

    return props.persons.map((person, index) => {
        return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              changeName={(event) => props.changeNameHandler(event, person.id)}
              click={() => props.deletePersonHandler(index)}>
              {person.hobbies}
          </Person>
        
      });
    }
export default Persons;
import React from 'react';

import styles from './Person.module.css'


const person = (props) => {

    let rnd = Math.random();
    if (rnd < 0.5) {
        throw new Error("Component Person Error test")
    }

    return (
        <div className={styles.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeName} value={props.name} />
        </div>

    );
};

export default person;

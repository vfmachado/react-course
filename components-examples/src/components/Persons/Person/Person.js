import React from 'react';

import PropTypes from 'prop-types';

import styles from './Person.module.css'


const person = (props) => {

    console.log("[Person.js] rendering...")

    return (
        <div className={styles.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeName} value={props.name} />
        </div>

    );
};

person.propTypes = {

    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number

};

export default person;

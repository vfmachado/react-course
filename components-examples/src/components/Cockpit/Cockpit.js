
import React from 'react'

import styles from './Cockpit.module.css';  
 
const Cockpit = (props) => {
    
    let currentBtnStyle = [styles.ToggleButton];
    if (props.showPersons) {
        currentBtnStyle.push(styles.Red);
    }

    return ( 
        <div className={styles.Cockpit}>
            <br />
            <h1>Learning React</h1>
            <p className={styles.bold}>React is amazing</p>

            <button className={currentBtnStyle.join(' ')} onClick={props.togglePersons}>
                Toggle Persons
            </button>

            <button className={styles.Button} onClick={props.buttonClick}>
                Click me
            </button>
        </div>
    );

};

export default Cockpit;
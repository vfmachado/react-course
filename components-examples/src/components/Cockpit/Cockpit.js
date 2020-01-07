
import React from 'react'

import styles from './Cockpit.module.css';  

import Aux from '../../hoc/Aux';

const Cockpit = (props) => {
    
    let currentBtnStyle = [styles.ToggleButton];
    if (props.showPersons) {
        currentBtnStyle.push(styles.Red);
    }

    return ( 
        <Aux>
        {/* React.Fragment does the same */}
        <div>
            <h1>Header</h1>
        </div>
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
        </Aux>
    );

};

export default Cockpit;
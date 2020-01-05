import React from 'react';

//import Radium from 'radium';
import styled from 'styled-components';

import './Person.css'


const StyledDiv = styled.div`
            
    width: 60%;
    margin: 16px auto;
    border: 2px solid gray;
    padding: 20px 40px;

    @media(min-width: 500px) {
        width: 450px;
    }        
    `;

const person = (props) => {

    /*
    const style = {
        '@media(min-width: 500px)': {
            width: '450px'
        }
    };
    */
    return (
        //<div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeName} value={props.name} />
        </StyledDiv>  
        //</div>

    );
};

//export default Radium(person);
export default person;

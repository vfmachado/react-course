import React from 'react'

const userOutput = (props) => {

    const mystyle = {
        color: 'blue'
    };

    return (
        <div>
        <p>{props.p1}</p>
        <p style={mystyle}>{props.p2}</p>
        <hr />
        </div>
    );
};

export default userOutput;
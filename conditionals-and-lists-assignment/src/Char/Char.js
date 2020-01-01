import React from 'react'

import './Char.css'

const Char = (props) => {

    return (
        <div className="Char" onClick={props.deleteMe}>
            {props.content}
        </div>
    );

}

export default Char;
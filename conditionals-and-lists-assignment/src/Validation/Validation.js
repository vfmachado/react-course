import React from 'react'

const Validation = (props) => {

    let msg;
    if (props.textSize > 5) {
        msg = "Text size OK"
    } else {
        msg = "Text too short"
    }

    return (
        <p>{msg}</p>
    )

}

export default Validation;
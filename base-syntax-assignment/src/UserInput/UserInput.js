import React from 'react';

import './UserInput.css'

const userInput = ({user, changeUser}) => {

    const handleUsername = (event) => {console.log(event); changeUser(event.target.value)};

    return (
        <div className='UserInput'>
            <label>Username: </label>
            <input type="text" onChange={handleUsername} value={user} />
        </div>

    );
};

export default userInput;

import React from 'react';

import burgerLogo from '../../assets/images/burger.png';

import style from './Logo.module.css';

const Logo = (props) => (
    <div className={style.Logo}>
        <img src={burgerLogo} alt={"Your way burger"}/>
    </div>
);

export default Logo;
import React from 'react'

import burgerLogo from '../../assets/images/burger-logo.png';

import classes from './Logo.css';

const Logo = props => {
    return (
        <div className={classes.Logo} style={{height: props.height, marginBottom: props.mb}}>
            <img src={burgerLogo} alt="myBurger" srcset="" />
        </div>
    )
}

export default Logo;

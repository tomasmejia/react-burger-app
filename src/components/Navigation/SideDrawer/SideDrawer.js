import React from 'react';

import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

import classes from './SideDrawer.css';

const SideDrawer = props => {
    // ...
  return (
    <div className={classes.SideDrawer}>
        <Logo height="11%" mb="32px" />
        <nav>
            <NavItems />
        </nav>
    </div>
  );
};

export default SideDrawer;

import React from 'react';

import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import classes from './SideDrawer.css';

const SideDrawer = props => {
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
  return (
      <React.Fragment>
          <Backdrop show={props.open} clicked={props.closed} />
          <div className={attachedClasses.join(" ")}>
              <Logo height="11%" mb="32px" />
              <nav>
                  <NavItems />
              </nav>
          </div>
      </React.Fragment>
  );
};

export default SideDrawer;

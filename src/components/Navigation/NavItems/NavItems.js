import React from 'react'

import NavItem from './NavItem/NavItem';

import classes from './NavItems.css';
const NavItems = () => {
  return (
      <ul className={classes.NavItems}>
          <NavItem links="/" active>Burger Builder</NavItem>
          <NavItem links="/">Checkout</NavItem>
      </ul>
  )
}

export default NavItems

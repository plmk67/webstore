import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Aux from '../../hoc/Aux';
import classes from './NavBar.module.css';

class NavBar extends Component {

    render() {
        return(
            <Aux>
                <Nav className={classes.NavBar}>
                    <NavItem className={classes.NavItem}>
                        <NavLink href="#" >Login</NavLink>
                    </NavItem>
                    <NavItem className={classes.NavItem}>
                        <NavLink  href="#">Cart</NavLink>
                    </NavItem>
                </Nav>
            </Aux>
        )
    }
}

export default NavBar;
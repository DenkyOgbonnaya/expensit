import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

const NavBar = () => {
    return(
        <Navbar color='light' light > 
            <NavbarBrand> Expensit </NavbarBrand>
        </Navbar>
    )
}

export default NavBar;
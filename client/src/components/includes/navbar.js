import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

const NavBar = () => {
    return(
        <Navbar color='light' light > 
            <NavbarBrand> <img src='/icons/logo_ic20.png' alt='add icon'/> Expensit </NavbarBrand>
        </Navbar>
    )
}

export default NavBar;
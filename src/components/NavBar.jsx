import React, { Fragment, useState } from 'react';
import {
    Navbar,
    Collapse,
    NavbarToggler,
    NavbarText,
    Nav, 
    NavItem,
} from 'reactstrap';
// import { authContext } from ''

const navStyle = {
    // boxShadow: '2px 3px 4px burlywood'
}

export const NavBar = () => {
    // const state = useContext(authContext);
    const { isAuthenticated } = state;
    const [isOpen, setIsOpen] = useState(false);
    const toggler = () => setIsOpen(isOpen);

    const authLinks = (
        <Fragment>
            <NavItem>
                Project                
            </NavItem>
            <NavItem>
                Project                
            </NavItem>
            <NavItem>
                Project                
            </NavItem>
        </Fragment>
    );
    return (
        <Navbar color='dark' dark expand='sm' className='sticky-top' style={navStyle}>
            {/* <NavbarBrand>
             <i className="fas fa-book fa-2x align-middle mr-4"  /> 
          <a href='#' className='text-warning'>Software Developer Portfolio</a>
             </NavbarBrand> */}

            <NavbarToggler onClick={toggler} />
            <Collapse isOpen={isOpen} navbar>
                <NavbarText className='ml-auto'>
                    {isAuthenticated ? 'Welcome, Batman!!' : 'Making the Web a better safe place!!!'}
                </NavbarText>
                <Nav className='ml-auto flex-row' navbar>
                    <ul>
                        <li>contact</li>
                        <li>projects</li>
                        <li>About</li>
                    </ul>
                    {isAuthenticated ? authLinks : guestlinks}
                </Nav>
            </Collapse>
        </Navbar>
    )
}
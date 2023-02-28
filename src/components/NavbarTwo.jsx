import React, { useState, Fragment } from "react";
import { ContactForm } from "./ContactForm";

import {
    Collapse,
   Navbar,   
   NavbarBrand, 
   NavbarToggler,
   Nav,   
} from 'reactstrap';


const NavBarTwo =() => {
    const [isOpen, setIsOpen] = useState(false);
  const toggler = () => setIsOpen(!isOpen);


    const guestLinks = ( 
        <Fragment >
            <navItem>
                <ContactForm />
            </navItem>
        </Fragment>

    )
    return(
        <Navbar bg="light" expand="lg" className="sticky-top navbar-expand-sm"
        style={{boxShadow:'1px 5px 8px blue, 1px 10px 8px aliceblue, 1px 15px 8px aqua'}}>
           <NavbarBrand>
            <div style={{display:'flex'}}>
                <div className="mt-2">
                    <img src="/logo192.png">
                    </img>
                </div>

            </div>
            </NavbarBrand>
            <NavbarToggler 
        className='icon nav-toggle'        
        style={{
          border:'none',                                       
          }}
        title='Menu'  
        onClick={toggler}>
        </NavbarToggler> 
        <Collapse isOpen={isOpen} navbar>
            <navbarText className='ml-auto'>
                Wayne Mitchell
            </navbarText>
            <Nav className='ml-auto links' navbar>
                {guestLinks}
            </Nav>
        </Collapse>

        
      </Navbar>
    );
  }
import React, { useState, useContext, Fragment } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";

import { authContext } from "../context/AuthProvider";
// import { IconName } from "react-icons/gi"
import { GiAbstract023 } from 'react-icons/gi'
import { About } from "./AboutPage";
// import { Login } from "./Login";
// import { SignUp } from "./SignUp";
// import { Logout } from "./Logout";
// import { ContactForm } from './ContactForm';
// import { AdminLogin } from "./AdminLogin";
// import { PricePlan } from "./PricePlanBtn";
// import { DeleteContact } from "./DeleteBtn";




export const NavbarTwo = () => {
  const store = useContext(authContext);  
  const [isOpen, setIsOpen] = useState(false);
  const toggler = () => setIsOpen(!isOpen);
  const { user, isAuthenticated } = store;
  

  const navStyle = {
    cursor:'pointer',   
    height:'6rem'   
  }
  const navTitle = {
    fontFamily: "myFont",
    fontSize: "3rem",    
    letterSpacing: "4px",
    marginTop:"3em",       
  }
  const navTitle2 = {    
    fontSize: "3rem",        
  };
  
  const guestLinks = (
    <Fragment >
      <NavItem>        
        <About />
      </NavItem>                
      <NavItem >
        <ContactForm />
      </NavItem>
      <NavItem >
        ContactForm
        <ContactForm />
      </NavItem>      
    </Fragment>
  );
  

  const authLinks = (
      <Fragment>
          <NavItem>
            Login
              {/* <Logout /> */}
          </NavItem>
      </Fragment>
  )

  return (
    <Navbar 
      dark expand="sm" 
      className='sticky-top navbar-expand-sm'            
      style={{              
        boxShadow: '1px 5px 8px blue, 1px 10px 8px aliceblue, 1px 15px 8px aqua'             
      }}>       
      <NavbarBrand>
        <div style={{display:'flex'}}>            
            <div className='mt-2' >
              <img src="/logo192.png"
                className="App-logo"
                id="AppLogo"
                alt="reaact_logo"                     
                style={{ height:"60px", marginRight:'1rem',marginBottom:'1.5rem'}}> 
                </img>                
                <span style={navTitle} className='title' >MIT-</span>              
              <a href='#admin-modal' className='title' style={navTitle2}>WebDesign</a>
            </div>
        </div>                           
      </NavbarBrand>   
      
      <NavbarToggler 
        className='icon nav-toggle'        
        style={{
          border:'none',                                       
          }}
        title='Menu'  
        onClick={toggler}
       ></NavbarToggler>
       
      <Collapse isOpen={isOpen} navbar>
        <NavbarText className='ml-auto'>
          {user.name ? `Welcome, ${user.name}!` : null}
        </NavbarText>        
        <Nav className="ml-auto links" navbar>
          {isAuthenticated ? authLinks : guestLinks}
        </Nav>
      </Collapse>
      
    </Navbar>
   
  );
};
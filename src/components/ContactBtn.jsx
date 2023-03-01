import React from 'react';
import {NavLink, Button} from 'reactstrap';

/////// function for button to go to contact us section /////////////
export const ContactBtn = () => {
    return (
    <NavLink href="#contactUs" >
            <Button className='contactbtn' size='sm' color='secondary'>
                Contact Me  <i className="btn-text fab fa-mailchimp" />
            </Button>
        </NavLink>
    )
}
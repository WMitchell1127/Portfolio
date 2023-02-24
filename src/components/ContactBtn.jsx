import React from 'react';
import {NavLink, Button} from 'reactstrap';

/////// function for button to go to contact us section /////////////
export const ContactBtn = () => {
    return (
    <NavLink href="#contactUs">
            <Button size='sm' color='secondary'>Contact Me  <i className="fab fa-mailchimp fa-2x " /></Button>
        </NavLink>
    )
}
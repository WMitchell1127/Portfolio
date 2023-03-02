import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import { ContactBtn } from "../components/ContactBtn";
// import Contact from '../components/Contact'
import { About } from '../components/AboutPage'


export const links = [
    {
        id: 1,
        url: '/',
        text: 'About',
    },
    {
        id: 2,
        url: '/',
        text: 'Profile',  
    },
    {
        id: 3,
        url: '/',
        text: 'Projects',  
    },
    {
        id: '#contactForm',        
        url: '/ContactForm',
        text: 'Contact',  
    },
    {
        id: 5,
        url: 'https://docs.google.com/document/d/1S0qEDqOw00y6Uni-snqjItDrg5v3aIdPtVHcnm3X_To/edit',
        text: 'Resume',
          
    },
];

export const social = [
    
    {
        id:2,
        url: 'http://www.linkedin.com',
        name:'name',
        icon: <FaLinkedin />,
    },
    {
        id:3,
        url: 'http://www.Twitter.com',
        icon: <FaTwitter />,
    },
    {
        id:1,
        url: 'http://www.Github.com',
        icon: <FaGithub />,
    },
];
import React from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ContactBtn } from "../components/ContactBtn";
// import Contact from '../components/Contact'


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
        id: '#contactMe',
        
        url: '/',
        text: 'Contact',  
    },
    {
        id: 5,
        url: '/',
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
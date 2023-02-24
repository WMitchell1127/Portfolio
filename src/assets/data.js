import React from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
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
        id: 4,
        url: '#contactMe',
        label:'contact',
        text: 'Contact',  
    },
    {
        id: 5,
        url: 'src/assets/myResume.docx',
        text: 'Resume',  
    },
];

export const social = [
    
    {
        id:2,
        url: 'http://www.linkedin.com',
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
import React, { useState, useRef, useEffect } from 'react';
import { links, social } from '../assets/data';
import { FaBars } from 'react-icons/fa';
import logo from '../logo.svg';
import { ContactBtn } from './ContactBtn';


export const NavBar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef();
    const linksRef = useRef(null);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    // useEffects here is used for the CSS and responsive drop-menu
    useEffect(() => {
        // The ### .getBoundingClientReact() ### method returns an object
        //  providing info about the size of an element and its
        //  position relative to the viewport.
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);


    return (
        <>
            <div className='nav-center'>
                <div className='nav-header'>                    
                    <button className='nav-toggle' onClick={toggleLinks}>
                        <FaBars style={{ color: 'burlywood' }} />
                    </button>
                </div>
                <div className='links-container' ref={linksContainerRef}>
                    <ul className='links' ref={linksRef}>
                        {links.map((link) => {
                            const { id, url, text } = link;
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <ul className='social-icons'>                    
                    {/* <ContactBtn /> */}
                </ul>
            </div>
        </>
    );
};
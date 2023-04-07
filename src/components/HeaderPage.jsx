import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Navbar } from 'reactstrap';
// import { links, social } from '../../data/navbarData';
// import sun from '../assets/img/sun.svg';

export const HeaderPage = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(0);
    const linksRef = useRef(null);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    // useEffects here is used for the CSS and responsive drop-menu
    // useEffect(() => {
        // The ### .getBoundingClientReact() ### method returns an object
        //  providing info about the size of an element and its
        //  position relative to the viewport.
    //     const linksHeight = linksRef.current.getBoundingClientRect().height;
    //     if (showLinks) {
    //         linksContainerRef.current.style.height = `${linksHeight}px`;
    //     } else {
    //         linksContainerRef.current.style.height = '0px';
    //     }
    // }, [showLinks]);

    const navTitle = {
        fontFamily: 'myFont',
        fontSize: '4rem',
        letterSpacing: '1rem',
        cursor: 'pointer',
    };
    const navTitle2 = {
        fontSize: '3rem',
        color: 'burlywood',
        marginLeft: '15px'

    }

    return (
        <Navbar className=' homeNav'>
            <div >
                <div className='nav-header'>
                    {/* <img src={sun} className='logo' alt='logo'
                        style={{
                            height: 60,
                            marginRight: '1rem',
                            marginBottom: '1.5rem'
                        }} /> */}
                    <span style={navTitle} className='chaaTitle'>cheii'h</span>
                    <a href='admin-modal' className='chaaTitle2' style={navTitle2}>Designs</a>
                </div>
            </div>    
        </Navbar>
    )
}
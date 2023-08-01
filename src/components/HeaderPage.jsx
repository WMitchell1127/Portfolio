import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Navbar } from 'reactstrap';


export const HeaderPage = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(0);
    const linksRef = useRef(null);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };



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
                    <span style={navTitle} className='chaaTitle'>che'ah</span>
                    <a href='admin-modal' className='chaaTitle2' style={navTitle2}>WebDesigns</a>
                </div>
            </div>    
        </Navbar>
    )
}
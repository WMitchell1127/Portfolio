import React from "react";
import { ContactForm } from '../components/ContactForm'
import { social } from '../assets/data';
import { Container } from "reactstrap"

export const ContactSec = () => {

  const secDiv = {
    height: "160vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    color: "white",
    textShadow: "2px 3px 1px black",
    fontSize: "1.5rem",
  };
  return (
    <div>
      <Container className='mt-1' id="contactMe">
        <div style={secDiv} className="services-menu" id="contactUs">
          <h1 className="text-white m-2">Contact Me</h1>
          <ContactForm />
          <p>
             13201 S. Wakial loop
            Phoenix Az, 85044
          </p>
          <p>
            You can also contact me by phone 480-931-1131 or email{" "}
            <span style={{ color:"burlywood" }}>
              <a href="mailto:wayne.mitchell.1127@gmail.com?subject='subject text'">
                wayne.mitchell.1127@gmail.com
              </a>
            </span>
          </p>          
        </div>
      </Container>
      {/* //////////////// social media icons ////////////// */}
      <footer className="footer">
            <div className="mt-3 text-center footerSocialIcons">
              <ul className='footerSocial-icons' >
                {social.map((socialIcon) => {
                  const { id, url, icon } = socialIcon;
                  return (
                    <li key={id}>
                      <a href={url} target='_blank'>{icon}</a>
                    </li>
                  );
                })}
              </ul>
              <h6>&copy; Copyright 2023 WM All rights reserved.</h6>
            </div>
          </footer>
    </div>
  )
}

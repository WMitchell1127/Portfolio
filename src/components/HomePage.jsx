import React from "react";
import { social } from '../assets/data';


import { ContactSec } from "./Contact"
import IMG_0048 from "../assets/img/IMG_0048-edited.jpg"
import { NavBar } from "./NavBar";
import { About } from "./AboutPage";
import { Skills } from "./Skills";

export const HomePage = () => {
  ///////// styling of page ///////////////////
  return (
    <div className="homeDiv" id="aboutMe" >
      <div className="topNav">
        <NavBar />
      </div>
      <div className="row">
        <div className="column" style={{border:'2px solid red'}}>
          <div className="content1" style={{border:'2px solid burlywood'}}>
            <div className="circleText" style={{border:'2px solid blue'}}>
              <h3 style={{ color: '#ff8800' }}>Hi, My name is Wayne Mitchell</h3>
              <h4 style={{ color: '#ff8800' }}>I'm a Software Developer based Arizona</h4>
            </div>
            <div className="SocialIcons" style={{border:'2px solid green'}}>
              <ul className="social-icons">
                {social.map((socialIcon) => {
                  const { id, url, icon } = socialIcon;
                  return (
                    <li key={id}>
                      <a href={url} target='_blank'>{icon}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="column" >
          <div className="content" >
            <img src={IMG_0048} alt="Selfie" className="profileImg"></img>
          </div>
        </div>          
      </div>
      <About />
      <Skills />
      <ContactSec />
    </div>
  );
};

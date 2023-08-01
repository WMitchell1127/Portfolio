import React from "react";
import {
  Container,

} from 'reactstrap'
import { social } from '../assets/data';


import { ContactSec } from "./Contact"
import Selfie from "../assets/img/Subject.png"
import { NavBar } from "./NavBar";
import { About } from "./AboutPage";
import { Skills } from "./Skills";
import { BackToTopButton } from "./BackToTheTop";

export const HomePage = () => {
  ///////// styling of page ///////////////////
  return (
    <div className="homeDiv" id="aboutMe">
      <div className="topNav">
        <NavBar />
      </div>
      <div className="row">
        <div className="content">
          <div className="circleText center">
            <div className="homePageText">
              <h2 className="homeTitle">Wayne Mitchell</h2>
              <h4 className="homeTitle">Software Developer</h4>
            </div>
          </div>
        </div>
        <div className="content content1" >
          <img src={Selfie} alt="Selfie" className="profileImg" style={{ paddingTop: '3.5vh' }}></img>
        </div>
      </div>

      <About />
      {/* <Skills /> */}
      <ContactSec />


      {/* <footer id="footer">
        
          <div id="footer" class="footer-a">
            <span>©Copyright 2020, Original Mitchell</span>
            <a href="#lost">
              <i
                className="fab fa-github fa-3x snapchat mr-2"
                style={{ color: "gray" }}
              ></i></a>

            <a href="#">
              <img src="Images\Twitter.png" alt="twitter-logo" class="twitter-logo" /></a>

            <a href="#">
              <img src="Images\Instagram.png" alt="instagram-logo" class="instagram-logo" /></a>

            <a href="#">
              <img src="Images\LinkedIn.png" alt="LinkedIn-logo" class="LinkedIn-logo" /></a>

            <a href="#">
              <img src="Images\Youtube.png" alt="Youtube-logo" class="Youtube-logo" /></a>
          </div>
          <div class="footer-div" id="footer">
            <ul class="footer-ul">
              <li class="footer"><a href="#">Privacy</a></li>
              <li class="footer"><a href="#">Terms</a></li>
              <li class="footer"><a href="Images\License.txt" target="_blank">Licence</a></li>
            </ul>
          </div>
        
      </footer> */}
      <BackToTopButton />
    </div>
  );
};

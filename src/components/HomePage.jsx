import React from "react";
import {
  Container,

} from 'reactstrap'
import { social } from '../assets/data';


import { ContactSec } from "./Contact"
import IMG_0048 from "../assets/img/IMG_0048-edited.jpg"
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
        <div className="column">
          <div className="content1">
            <div className="circleText">
              <h3 className="homeTitle">Hi, My name is Wayne Mitchell</h3>
              <h4 className="homeTitle">I'm a Software Developer based Arizona</h4>
            </div>

          </div>
        </div>
        <div className="column" style={{ height: '50vh' }} >
          <div className="content" >
            <img src={IMG_0048} alt="Selfie" className="profileImg" ></img>
          </div>
        </div>
      </div>
      <Container>
        {/* <div className="mt-3 text-center socialIcons">
          <p>Copyright 2021</p>
          <a href="#!">
            <i
              className="fab fa-twitter fa-3x twitter mr-2"
              style={{ color: "#1da1f2" }}
            ></i>
          </a>
          <a href="#!">
            <i
              className="fab fa-facebook fa-3x facebook mr-2"
              style={{ color: "#1877f2" }}
            ></i>
          </a>
          <a href="#!">
            <i
              className="fab fa-instagram fa-3x instagram mr-2"
              style={{ color: "#c32aa3" }}
            ></i>
          </a>

          <a href="#!">
            <i
              className="fab fa-github fa-3x snapchat mr-2"
              style={{ color: "gray" }}
            ></i>
          </a>
        </div> */}
      </Container>
      {/* <About /> */}
      <Skills />
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
      <BackToTopButton/>
    </div>
  );
};

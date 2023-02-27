import React from "react";
// import { Container } from "reactstrap";
// import { NavBar } from "./NavBar";
import { ContactSec } from "./Contact"
import IMG_0048 from "../assets/img/IMG_0048-edited.jpg"
import { NavBar } from "./NavBar";




export const HomePage = () => {

  ///////// styling of page ///////////////////  


  return (
    <div className="homeDiv" >
      <div className="topNav">
        <NavBar />
      </div>
      <div className="row">
        <div className="column">
          <div className="content1" >
            <div className="circleText">
              <h3 style={{ color: '#ff8800' }}>Hi, My name is Wayne Mitchell</h3>
              <h4 style={{ color: '#ff8800' }}>I'm a Software Developer based Arizona</h4>

            </div>
          </div>
        </div>
        <div className="column" >
          <div className="content" >
            <img src={IMG_0048} alt="Selfie" className="profileImg"></img>
          </div>
        </div>
      </div>
      <ContactSec />
    </div>
  );
};

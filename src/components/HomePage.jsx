import React from "react";
import { Container, Row, Col } from "reactstrap";
import { NavBar } from "./NavBar";
// import { ContactForm } from "./ContactForm";
// import { BackToTopButton } from './BackToTopButton';

//////////// the home page that shows when you go to website /////////////
export const HomePage = () => {
  ///////// styling of page ///////////////////
  const home = {
    display: "flex",
    flexDirection: "column",
    marginTop: "80px",
  };

  const title = {
    color: "burlywood",
  };

  const mainDiv = {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginBottme: "80px"
  };

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
    <div style={home}>
      <NavBar />
      <Container id="top" style={mainDiv}>
        <h2 style={{ color: "#ff8800" }}>Hi, I'm</h2>
        <h1 >
          Wayne <span style={title}>Mitchell</span>
        </h1>
      </Container>

      <Container className='mb-1'>
        {/* <!-- Experience Section --> */}
        <Row className="experience-list" >
          <Col sm='12' md='6' lg='4'>
            <h1>Languages</h1>
            <h5 className='pl-3'>In Coding...</h5>
            <ul>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Mongoose</li>
              <li>Express</li>
              <li>Node.Js</li>
              <li>React</li>
              <li>Redux</li>
              <li>JQuery</li>
              {/* <li>Angular</li>
              <li>C#</li>
              <li>PHP</li>
              <li>Python</li>
              <li>Java</li> */}
              <li>Pug</li>
              {/* <li>EJS</li> */}
            </ul>
          </Col>

          <Col sm='0' md='6' lg='8' className="">
            <img
              src="./img/code2.jpg"
              className="img-fluid"
              alt="Menu"
            />
          </Col>
        </Row>
      </Container>

      <Container className='mt-5 mb-5'>
        {/* <!-- About Section --> */}
        <Row className="" id="about">
          <Col sm='4' md='6' lg='8'>
            <img
              src="./img/code3.jpg"
              className="img-fluid mt-2"
              alt="code"
            />
          </Col>

          <Col sm='8' md='6' lg='4'>
            <h1 className="text-center">About Me</h1>
            <h5 className="text-center">Coding since 2020</h5>
            <p className="text-large">
              I first learned to code at Persevere code camp with the MERN stack. 
              Since then I have continued to grow and acquire new languages. I am honest, reliable, trustworthy, and very affordable.
              I live in Arizona, but can work remotely from anywhere. No job is too big or too small for me. I can help you
              with making a website, getting traffic to your site, re-branding, and to make your business grow.
            </p>
            <p className="text-large ">
              When choosing a developer choose local, choose me and help a small business to keep your money
              local. You will not regret it !!!!
            </p>
          </Col>
        </Row>
      </Container>

      {/* <Container className='mb-1'> */}
        {/* <!-- Menu Section --> */}
        {/* <Row className="m-3 services-menu" id="menu">
          <Col sm='12' md='6' lg='4'>
            <h1 className="text-center mt-4">My Services</h1>
            <h4>Web Design</h4>
            <p className="text-grey">
              Get the best designs, custom made, and eye catching. Have the site not only look good on
              a computer screen but also on phones and tablets. Great UX and UI with responsive pages.
            </p>

            <h4>Programming</h4>
            <p className="text-grey">
              Algorithms, data structure, logins, registrations, forms, payments, and security. Organize 
              data, and make your site easy to access. 
            </p>

            <h4>Search Engine Optimization</h4>
            <p className="text-grey">
              Get your site seen on search results and by people looking for your services. 
              Make the site accessible to everyone and all search engines. Measure the success of
              the SEO by our analytics and by being in the top of the search results.
            </p>

            <h4>Digital Marketing</h4>
            <p className="text-grey">
              Have your business seen on all social media outlets and managed daily. Get your business noticed
              by the public. If they cant see you they wont send their business your way.
            </p>

            <h4>Website Hosting</h4>
            <p className="text-grey">
              Low introductory rates, support, and maintenance. Our servers can handle your traffic with no worries.
              Automatic software updates, security, and malware protection. 
            </p>
          </Col>

          <Col sm='0' md='6' lg='8' className="servicesImg">
            <img
              src="./img/code4.jpg"
              className="img-fluid"
              alt="Menu"
            />
          </Col>
        </Row>
      </Container> */}

      {/* //////////// contact us section /////////// */}

      <Container className='mt-1'>
        <div style={secDiv} className="services-menu" id="contactUs">
      
          <h1 className="text-white m-2">Contact Me</h1>
         
          {/* <ContactForm /> */}

          <p className="mt-5">
            {" "}
            Do not hesitate to contact me for a Free Quote.
          </p>
          <p>
            <span style={{ color: "burlywood" }}>Wayne Mitchell</span>, 13201 S. Wakial loop, 
            Phoenix Az, 85044
          </p>
          <p>
            You can also contact me by phone 480-931-1131 or email{" "}
            <span style={{ color: "burlywood" }}>wayne.mitchell.1127@gmail.com</span>
          </p>

          {/* //////////////// social media icons ////////////// */}
        <Container>
          <div className="mt-3 text-center socialIcons">
            <a href="#!">
              <i
                className="fab fa-twitter fa-1x twitter mr-2"
                style={{ color: "#1da1f2" }}
                ></i>
            </a>
            <a href="#!">
              <i
                className="fab fa-facebook facebook mr-2"
                style={{ color: "#1877f2" }}
                ></i>
            </a>
            <a href="#!">
              <i
                className="fab fa-linkedin linkedin mr-2"
                style={{ color: "DodgerBlue" }}
                ></i>
            </a>
          
            <a href="#!">
              <i
                className="fab fa-github snapchat mr-2"
                style={{ color: "gray" }}
                ></i>
            </a>
                <h6>&copy; Copyright 2023 WM All rights reserved.</h6>
           
          
          </div>
          </Container>
        </div>
      </Container>
      {/* <BackToTopButton /> */}
    </div>
  );
};

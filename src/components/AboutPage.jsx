import React from "react"
import batman from '../assets/img/batman.jpg'
import John from '../assets/img/myEyes/john-ford-point-1200x858.jpg'
import {
  Container,
  Row,
  Col,

} from 'reactstrap'
import Codes from "../assets/img/Codes.jpg"
import Coder from '../assets/img/3_what-does-a-web-designer-do-840x420.jpeg'

export const About = () => {
  return (
    <div>
      <Container className='mt-5 mb-5' id="aboutMe">
        <h1 id="about" className="text-center">About Me</h1>
        <Row className="" id="about">
          <Col sm='4' md='6' lg='8'>
            <img
              src={John}
              className="img-fluid mt-2"
              alt="code"
            />
          </Col>

          <Col sm='8' md='6' lg='4'>
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
        <Row id="projects">
          <h3 >Projects</h3>
        <p className="text-grey">
              Get the best designs, custom made, and eye catching. Have the site not only look good on
              a computer screen but also on phones and tablets. Great UX and UI with responsive pages.
            </p>
            <img src={Codes} alt="" className="coderImg"/>
            <img src={Coder} alt="" className="coderImg"/>
            <img src={Codes} alt="" className="coderImg"/>

        </Row> 
      </Container>
      <Container className='mb-1'>     
        <Row className="m-3 services-menu" id="menu">          
        </Row>
      </Container>
    </div >
  )
}
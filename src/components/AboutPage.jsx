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
          {/* <Col sm='12' md='6' lg='4'>
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
          </Col> */}

          {/* <Col sm='0' md='6' lg='8' className="servicesImg">
            <img
              src="./img/code4.jpg"
              className="img-fluid"
              alt="Menu"
            />
          </Col> */}
        </Row>
      </Container>
    </div >
  )
}
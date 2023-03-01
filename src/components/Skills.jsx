import React from "react";
import {
    Container,
    Row,
    Col,
} from 'reactstrap'
import batman from '../assets/img/batman.jpg'

export const Skills = () =>{
    return(
        <div>
                <Container className='mb-1'>
        {/* <!-- Experience Section --> */}
        <h1>Skills</h1>
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
              
              <li>Pug</li>
              
            </ul>
          </Col>

          <Col sm='0' md='6' lg='8' className="">
            <img
            src={batman}
              className="img-fluid"
              alt="Menu"
            />
          </Col>
        </Row>
      </Container>
        </div>
    )
}
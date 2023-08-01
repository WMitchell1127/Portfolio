import React from "react"
import { Skills } from "./Skills"
import {
    Container,
    Row,
    Col,

} from 'reactstrap'
import Codes from "../assets/img/Choropleth_Map.png"
import Coder from '../assets/img/Home.jpg'

export const About = () => {
    return (
        <div>
            <Container className='mt-5 mb-5' id="aboutMe">
                <Skills />
                <Row id="projects">
                    <h3 >Projects</h3>
                    <p className="text-grey">
                        Get the best designs, custom made, and eye catching. Have the site not only look good on
                        a computer screen but also on phones and tablets. Great UX and UI with responsive pages.
                    </p>
                    <div className="projectImgs">
                        <div className="projImg1">
                            <img src={Codes} alt="" className="coderImg"></img>
                            <h5>Port</h5>
                        </div>
                        <div className="projImg2">
                            <img src={Coder} alt="" className="coderImg" />
                        </div>
                        <div className="projImg3">
                            <img src={Codes} alt="" className="coderImg"></img>
                            <h5>Port</h5>
                        </div>
                    </div>
                </Row>
            </Container>

            <Container className='mb-1'>
                <Row className="m-3 services-menu" id="menu">
                </Row>
            </Container>
        </div >
    )
}
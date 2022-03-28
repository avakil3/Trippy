import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

class AboutUs extends React.Component{
    render(){
        return (
        <div className="about-us-modal-container">
            <div className="card_container">
                <div className="au_modal_header">
                    <p>About Us</p>
                </div>
                <div className="about-us-cards">
                    <div className="about-me-card">
                        <div className="top-of-card">
                                <img src="/images/About_Us_imges/Aagam.jpg"/>
                        </div>
                        <div className="mid-of-card">
                            <p>Aagam Vakil</p>
                        </div>
                        <div className="card-logos">
                            <a href="https://www.linkedin.com/in/aagamvakil/"><FontAwesomeIcon icon={faLinkedin} id='company-icon' /><FontAwesomeIcon /></a>
                            <a href="https://github.com/avakil3"><FontAwesomeIcon icon={faGithub} id='company-icon' /><FontAwesomeIcon /></a>
                            <a href="https://app-academy.slack.com/archives/C036R7LLMS6/p1648236685016909"><FontAwesomeIcon icon={faCircleUser} id='company-icon' /><FontAwesomeIcon/></a>
                        </div>
                    </div>
                    <div className="about-me-card">
                        <div className="top-of-card">
                                <img src="/images/About_Us_imges/shawn.png"/>
                        </div>
                        <div className="mid-of-card">
                            <p>Shawn Fries</p>
                        </div>
                        <div className="card-logos">
                                <a href="https://www.linkedin.com/in/shawn-fries-628751139/"><FontAwesomeIcon icon={faLinkedin} id='company-icon' /><FontAwesomeIcon /></a>
                            <a href="https://github.com/Shawn-Fries"><FontAwesomeIcon icon={faGithub} id='company-icon' /><FontAwesomeIcon /></a>
                            <a href="https://shawn-fries.github.io/"><FontAwesomeIcon icon={faCircleUser} id='company-icon' /><FontAwesomeIcon/></a>
                        </div>
                    </div>
                    <div className="about-me-card">
                        <div className="top-of-card">
                                <img src="/images/About_Us_imges/yaakov.jpg"/>
                        </div>
                        <div className="mid-of-card">
                            <p>Yaakov Zaetz</p>
                        </div>
                        <div className="card-logos">
                            <a href="https://www.linkedin.com/in/yaakov-zaetz-764191b3/"><FontAwesomeIcon icon={faLinkedin} id='company-icon' /><FontAwesomeIcon /></a>
                            <a href="https://github.com/yakzaetz"><FontAwesomeIcon icon={faGithub} id='company-icon' /><FontAwesomeIcon /></a>
                            <a href=""><FontAwesomeIcon icon={faCircleUser} id='company-icon' /><FontAwesomeIcon/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default AboutUs
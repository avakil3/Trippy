import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

class AboutUs extends React.Component{
    render(){
        return <div className="about-us-container">
            <div className="about-me-card">
                <div className="top-of-card">
                    {/* <img src="" alt="" /> */}
                </div>
                <div className="mid-of-card">
                    <p>Aagam Vakil</p>
                </div>
                <div className="card-logos">
                    <a href="https://www.linkedin.com/in/aagamvakil/"><FontAwesomeIcon icon={faLinkedin} id='company-icon' /><FontAwesomeIcon /></a>
                    <a href="https://github.com/avakil3"><FontAwesomeIcon icon={faGithub} id='company-icon' /><FontAwesomeIcon /></a>
                    <FontAwesomeIcon icon={faGithub} id='company-icon' /><FontAwesomeIcon />
                </div>
            </div>
            <div className="about-me-card">
                <div className="top-of-card">
                    {/* <img src="" alt="" /> */}
                </div>
                <div className="mid-of-card">
                    <p>Shawn Fries</p>
                </div>
                <div className="card-logos">
                    <a href="https://www.linkedin.com/in/aagamvakil/"><FontAwesomeIcon icon={faLinkedin} id='company-icon' /><FontAwesomeIcon /></a>
                    <a href="https://github.com/avakil3"><FontAwesomeIcon icon={faGithub} id='company-icon' /><FontAwesomeIcon /></a>
                    <FontAwesomeIcon icon={faGithub} id='company-icon' /><FontAwesomeIcon />
                </div>
            </div>
            <div className="about-me-card">
                <div className="top-of-card">
                    {/* <img src="" alt="" /> */}
                </div>
                <div className="mid-of-card">
                    <p>Yaakov Zaetz</p>
                </div>
                <div className="card-logos">
                    <a href="https://www.linkedin.com/in/aagamvakil/"><FontAwesomeIcon icon={faLinkedin} id='company-icon' /><FontAwesomeIcon /></a>
                    <a href="https://github.com/avakil3"><FontAwesomeIcon icon={faGithub} id='company-icon' /><FontAwesomeIcon /></a>
                    <FontAwesomeIcon icon={faGithub} id='company-icon' /><FontAwesomeIcon />
                </div>
            </div>
        </div>
    }
}

export default AboutUs
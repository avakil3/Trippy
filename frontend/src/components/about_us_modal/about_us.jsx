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
                            {/* <img src="" alt="" /> */}
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
                </div>
            </div>
        </div>
        )
    }
}

export default AboutUs
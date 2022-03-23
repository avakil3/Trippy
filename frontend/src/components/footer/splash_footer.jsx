import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub }  from "@fortawesome/free-brands-svg-icons";


class Footer extends React.Component {
    render(){
        return(
            <div className='footer-container'>
                <div className='trippy-footer'>
                    <div className='personal-card'>
                        <div className='card-header'>
                            <h2>Aagam Vakil</h2>
                        </div>
                        <div className='card-icons'>
                            <a href="https://www.linkedin.com/in/aagamvakil/"><FontAwesomeIcon icon={faLinkedin} id='company-icon' /><FontAwesomeIcon /></a>
                            <a href="https://github.com/avakil3"><FontAwesomeIcon icon={faGithub} id='company-icon' /><FontAwesomeIcon /></a>
                            <FontAwesomeIcon icon={faGithub} id='company-icon' /><FontAwesomeIcon/>
                        </div>
                    </div>
                    <div className='personal-card'>
                        <div className='card-header'>
                            <h2>Shawn Fries</h2>
                        </div>
                        <div className='card-icons'>
                            <a href="https://www.linkedin.com/in/shawn-fries-628751139/"><FontAwesomeIcon icon={faLinkedin} id='company-icon' /><FontAwesomeIcon /></a>
                            <a href="https://github.com/Shawn-Fries"><FontAwesomeIcon icon={faGithub} id='company-icon' /><FontAwesomeIcon /></a>
                            <FontAwesomeIcon icon={faGithub} id='company-icon' /><FontAwesomeIcon/>
                        </div>
                    </div>
                    <div className='personal-card'>
                        <div className='card-header'>
                            <h2>Yaakov Zaetz</h2>
                        </div>
                        <div className='card-icons'>
                            <a href="https://www.linkedin.com/in/yaakov-zaetz-764191b3/"><FontAwesomeIcon icon={faLinkedin} id='company-icon' /><FontAwesomeIcon /></a>
                            <a href="https://github.com/yakzaetz"><FontAwesomeIcon icon={faGithub} id='company-icon' /><FontAwesomeIcon /></a>
                            <FontAwesomeIcon icon={faGithub} id='company-icon' /><FontAwesomeIcon/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
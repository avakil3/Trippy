import React from 'react';
import HeaderContainer from '../header/header_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

class ShowPage extends React.Component{


    render(){
        return(
            <div className='whole-page'>
                <HeaderContainer/>
                <div className='everything-but-the-header'>
                    <Link to={"/home"}><div id='left-arrow'><FontAwesomeIcon icon={faArrowLeft} /></div></Link>
                    <div className='show-container-item'>
                        <div className='left-side-of-show-container'>
                            <img src="images/showpage_placeholder.png" />
                        </div>
                        <div className='right-side-of-show-container'>
                            <div className='header-of-right-side-of-show'></div>
                            <div></div><h1>Title here</h1>
                            <p>Region:</p>
                            <p>Vacation type:</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowPage;
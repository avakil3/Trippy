import React from 'react';
import HeaderContainer from '../header/header_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import Dropdown from './dropdown';

class ShowPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {clicked: false, liked: false}
        this.addDropdown = this.addDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
        this.like = this.like.bind(this)
        this.unlike = this.unlike.bind(this)
    }

    addDropdown(){
        this.setState({clicked: true})
    }
    hideDropdown(){
        this.setState({clicked: false})
    }

    like(){
        this.setState({liked: true})
    }

    unlike(){
        this.setState({liked: false})
    }

    render(){
        return(
            <div className='whole-page'>
                <HeaderContainer/>
                <div className='everything-but-the-header'>
                    <Link to={"/home"} id='left-arrow'><FontAwesomeIcon icon={faArrowLeft} /></Link>
                    <div>
                        <div className='show-container-item'>
                            <div className='left-side-of-show-container'>
                                <img src="images/showpage_placeholder.png" />
                            </div>
                            <div className='right-side-of-show-container'>
                                <div className='header-of-right-side-of-show'>
                                    <button>Save</button>
                                    <div className='arrow-container' onFocus={this.addDropdown} onBlur={this.hideDropdown } tabIndex="1">
                                        <p><FontAwesomeIcon icon={faAngleDown}/></p>
                                        {this.state.clicked ? < Dropdown /> : null}
                                    </div>
                                </div>
                                <div className='title-area-of-right-side-of-show'>
                                    <a href="https://www.toureiffel.paris/en"><p>this.props.pinId.title</p></a>
                                </div>
                                <div className='region-area-of-right-side-of-show'>
                                    <p>this.props.pinId.Region</p>
                                </div>
                                <div className='region-area-of-right-side-of-show'>
                                    <p>this.props.pinId.location</p>
                                </div>
                                <div className='region-area-of-right-side-of-show'>
                                    <p>this.props.pinId.Vacation type</p>
                                </div>
                                <div className='region-area-of-right-side-of-show'>
                                    <p>this.props.pinId.description</p>
                                </div>
                                <div>
                                    <div className='heart'>{this.state.liked ? <p id='heart' onClick={this.unlike}>{'\u2665'}</p> : <p id='heart' onClick={this.like}>{'\u2661'}</p> }</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowPage;
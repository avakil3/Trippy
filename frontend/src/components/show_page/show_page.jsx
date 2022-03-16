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

    findPin(pins, pinId){
        for (let i = 0; i < pins.length; i++) {
            const pin = pins[i];
            if (pin._id === pinId) return pin
        }
    }

    componentDidMount(){
        this.props.fetchPins(); 
    }

    capitalize(str){
        const letters = str.split("")
        letters[0] = letters[0].toUpperCase();
        return letters.join("")
    }

    render(){
        if (!this.props.pins.length) return null; 
        const pin = this.findPin(this.props.pins, this.props.router.params.pinId)
        // debugger
        return(
            <div className='whole-page'>
                <HeaderContainer/>
                <div className='everything-but-the-header'>
                    <Link to={"/home"} id='left-arrow'><FontAwesomeIcon icon={faArrowLeft} /></Link>
                    {/* <div> */}
                        <div className='show-container-item'>
                            <div className='left-side-of-show-container'>
                                <img src={pin.imageURL} />
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
                                    <a href={pin.extLink} target="_blank">{pin.title}</a>
                                </div>
                                <div className='region-area-of-right-side-of-show'>
                                    <p className="p-title">Region:</p>
                                    <p className="p-body">{this.capitalize(pin.region)}</p>
                                </div>
                                <div className='region-area-of-right-side-of-show'>
                                    <p className="p-title">Location:</p>
                                    <p className="p-body">{pin.location}</p>
                                </div>
                                <div className='description-area-of-right-side-of-show'>
                                    <div className="description-container">
                                        <div id='description-title'>
                                            <p className="p-title">Description:</p>
                                        </div>
                                        <div id='description-body'>
                                            <p className="p-body">{pin.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='heart'>{this.state.liked ? <p id='heart' onClick={this.unlike}>{'\u2665'}</p> : <p id='heart' onClick={this.like}>{'\u2661'}</p> }</div>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                    <div className='spacer'>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowPage;
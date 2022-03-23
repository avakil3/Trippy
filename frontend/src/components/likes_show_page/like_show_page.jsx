import React, { Component } from 'react';
import HeaderContainer from '../header/header_container';
import Pin from '../pin_item/pin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";

export class LikesShowPage extends Component {

    componentDidMount(){
        this.props.fetchPins()
        this.props.fetchLikes(this.props.currentUser);
    }

  render() {
    const {likes,pins,currentUser} = this.props;

    if(Object.values(pins).length === 0 || !currentUser  ) return null;
    const likedPinIds = Object.values(likes).map(pin => pin.pin);
    const likedPins = pins.filter(pin => likedPinIds.includes(pin._id))
    // debugger
    return (
      <div className='body'>
            <div className='gradient likes-page'></div>
            <HeaderContainer/>
            <div className='user-header'>
              <FontAwesomeIcon icon={faUserCircle} id="header-avatar" />
              <h2>{currentUser.username}</h2>
             <h4>My Likes</h4>
            </div>
        <div className='pins-section likes'>
             <div className="image-grid">
              {likedPins.length > 0 ? 
              likedPins.map((pin)=> <Pin pin={pin} key={pin._id} /> ) 
              : <p>No likes. Add some likes!</p>}
            </div>
        </div>

      </div>
    )
  }
}

export default LikesShowPage


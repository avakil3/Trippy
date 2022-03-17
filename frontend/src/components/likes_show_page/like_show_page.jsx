import React, { Component } from 'react';
import HeaderContainer from '../header/header_container';
import Pin from '../pin_item/pin';

export class LikesShowPage extends Component {

    componentDidMount(){
        this.props.fetchPins()
        this.props.fetchLikes(this.props.currentUser);
    }

  render() {
    const {likes,pins} = this.props;

    if(Object.values(pins).length === 0 ) return null;
    const likedPinIds = Object.values(likes).map(pin => pin.pin);
    const likedPins = pins.filter(pin => likedPinIds.includes(pin._id))
    // debugger
    return (
      <div className='body'>
            <HeaderContainer/>

        <div className='pins-section likes'>
             <h2>My Likes</h2>
             <hr />
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


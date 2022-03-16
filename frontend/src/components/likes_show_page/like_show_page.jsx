import React, { Component } from 'react';
import HeaderContainer from '../header/header_container';

export class LikesShowPage extends Component {
  render() {
    const {likes} = this.props;
    // if()
    debugger
    const likedPinIds = Object.values(likes).map(pin => pin.pin);
    return (
      <div>
            <HeaderContainer/>
            <div>
                {/* <h1>My Likes</h1> */}
            </div>

        <div className='pins-section'>
             <h2>My Likes</h2>
             <hr />
             <div className="image-grid">
              {/* {this.state.filteredPins.map((pin)=> <Pin pin={pin} imgDimensions={imgDimensions()} key={pin._id} /> )} */}
            </div>
        </div>

      </div>
    )
  }
}

export default LikesShowPage
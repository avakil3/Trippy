import React from 'react';
import {Link } from 'react-router-dom'
import LikeContainer from '../like_item/Like_container';


class Pin extends React.Component {

    render(){
        const {pin} = this.props;
        debugger
        return (
            <div className={this.props.imgDimensions ? this.props.imgDimensions : "gallery-container h-2"}> 
                <div className='gallery-item'> 
                    <Link to={`/show/${pin._id}`}> 
                        <img key={pin._id} className='pin-img' src={pin.imageURL} alt={pin.title}/>
                    </Link>
                    <p className='location'>{`${pin.location}`}</p>
                    <LikeContainer pin={pin} />
                </div>
            </div>
        )
    }
}

export default Pin;


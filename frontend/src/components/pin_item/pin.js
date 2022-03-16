import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {Link } from 'react-router-dom'

class Pin extends React.Component {
    constructor(props){
        super(props)
        this.state = {clicked:false}
        this.handleLikeClick = this.handleLikeClick.bind(this);
    }

    handleLikeClick(){
        this.setState({clicked: !this.state.clicked});
    }

    render(){
        const {pin,liked} = this.props;
        return (
            <div className={this.props.imgDimensions}> 
                <Link to={`/show/${pin._id}`}> 
                <div className='gallery-item'> 
                    <img key={pin._id} className='pin-img' src={pin.imageURL}/>
                    <FontAwesomeIcon icon={faHeart} onClick={()=> this.handleLikeClick()}
                    className={this.state.clicked || liked ? 'like clicked' : 'like'} />
                </div>
                </Link>
            </div>
        )
    }
}

export default Pin;


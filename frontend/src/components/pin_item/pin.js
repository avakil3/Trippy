import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {Link } from 'react-router-dom'

class Pin extends React.Component {
    constructor(props){
        super(props)
        this.handleLikeClick = this.handleLikeClick.bind(this);
    }

    handleLikeClick(liked,pin){
        if(liked){
            this.props.deleteLike(this.props.likes.find(like => like.pin === pin._id))
        }else{
            this.props.createNewLike(pin,this.props.currentUser);
        }
    }

    render(){
        const {pin,liked} = this.props;

        return (
            <div className={this.props.imgDimensions}> 
                <div className='gallery-item'> 
                    <Link to={`/show/${pin._id}`}> 
                        <img key={pin._id} className='pin-img' src={pin.imageURL}/>
                    </Link>
                    <FontAwesomeIcon icon={faHeart} onClick={()=> this.handleLikeClick(liked,pin)}
                    className={liked ? 'like clicked' : 'like'} />
                </div>
            </div>
        )
    }
}

export default Pin;


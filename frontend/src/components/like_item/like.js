import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export class Like extends Component {
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


  render() {
    const {likes, pin} = this.props;
    const likedPinIds = Object.values(likes).map(pin => pin.pin);
    const liked = likedPinIds.includes(pin._id) ? true : false;
    return (
        <FontAwesomeIcon icon={faHeart} onClick={()=> this.handleLikeClick(liked,pin)}
            className={liked ? 'like clicked' : 'like'} />
    )
  }
}

export default Like
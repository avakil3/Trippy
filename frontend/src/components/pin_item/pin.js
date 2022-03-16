import React from 'react';
import {Link } from 'react-router-dom'
import LikeContainer from '../like/Like_container';


class Pin extends React.Component {
    constructor(props){
        super(props)
        // this.handleLikeClick = this.handleLikeClick.bind(this);
    }

    // handleLikeClick(liked,pin){
    //     if(liked){
    //         this.props.deleteLike(this.props.likes.find(like => like.pin === pin._id))
    //     }else{
    //         this.props.createNewLike(pin,this.props.currentUser);
    //     }
    // }

    render(){
        const {pin} = this.props;
        return (
            <div className={this.props.imgDimensions}> 
                <div className='gallery-item'> 
                    <Link to={`/show/${pin._id}`}> 
                        <img key={pin._id} className='pin-img' src={pin.imageURL}/>
                    </Link>
                    <LikeContainer pin={pin} />
                    {/* <FontAwesomeIcon icon={faHeart} onClick={()=> this.handleLikeClick(liked,pin)}
                    className={liked ? 'like clicked' : 'like'} /> */}
                </div>
            </div>
        )
    }
}

export default Pin;


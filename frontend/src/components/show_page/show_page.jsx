import React from 'react';
import HeaderContainer from '../header/header_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { connect } from 'react-redux';

class ShowPage extends React.Component{


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
                                    <select id="board-selector">
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div className='title-area-of-right-side-of-show'>
                                    <p>this.props.pinId.title</p>
                                </div>
                                <div className='region-area-of-right-side-of-show'>
                                    <p>this.props.pinId.Region</p>
                                </div>
                                <div className='region-area-of-right-side-of-show'>
                                    <p>this.props.pinId.Vacation type</p>
                                </div>
                                <div className='region-area-of-right-side-of-show'>
                                    <p>this.props.pinId.description</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// const mSTP = (state, ownProps) => ({
//     pin: state.entities.activities[ownProps.match.params.activityId],
//     users: state.entities.users
// })

// const mDTP = dispatch => ({
//     fetchPin: id => dispatch(fetchPin(id))
// })

export default ShowPage;
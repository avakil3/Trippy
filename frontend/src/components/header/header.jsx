import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle, faAngleDown} from "@fortawesome/free-solid-svg-icons";
import { withRouter } from '../../util/route_util';

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {click:true};
        this.logout = this.logout.bind(this);
    }

  setClick() {
      this.setState({click: !this.state.click})
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
    this.props.router.navigate("/")
  }

  render() {
    const handleClick = () => this.setClick();
    return (
        <div className="splash-header">
        <div className="splash-logo-container">
          <Link to="/home" className="header-link">
            <img id="logo" src='images/trippy-logo.jpeg' alt="logo" />
          </Link>
        </div>
        <ul className="splash-nav-bar">
          {/* <li className="links"><a className="links" href='https://github.com/avakil3/trippy' target="_blank" >GitHub</a></li> */}
          {/* <li className="hidden">│</li> */}
          <li>
            <div className="header-dropdown" onClick={handleClick}>
            <div className='header-user-info'>
                <FontAwesomeIcon icon={faUserCircle} id="avatar" />
                <h4>{this.props.currentUser.username}</h4>
                <FontAwesomeIcon icon={faAngleDown} id="dropdown" />
            </div>
            <ul className={this.state.click ? "dropdown clicked" : "dropdown"}>
                    <Link to={'/likes'} className="dropdown-option">My Likes</Link>
                    <Link to={'/'} className="dropdown-option" onClick={this.logout}>Log out</Link>
            </ul>
            </div>
        </li>
        </ul>
       
      </div>
    );
  }
}

export default withRouter(Header);
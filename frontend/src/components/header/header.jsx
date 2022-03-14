import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle, faAngleDown} from "@fortawesome/free-solid-svg-icons";

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {click:true};
    }
    setClick(){
        this.setState({click: !this.state.click})
    }

  render() {
    const handleClick = () => this.setClick();
    return (
        <div className="splash-header">
        <div className="splash-logo-container">
          <Link to="/" className="header-link">
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
                <h4>{"[Insert currentUser here]"}</h4>
                <FontAwesomeIcon icon={faAngleDown} id="dropdown" />
            </div>
            <ul className={this.state.click ? "dropdown clicked" : "dropdown"}>
                <li>
                    <Link className="logout" to={'/'} onClick={()=> "logout()"}>Log out</Link>
                </li>
            </ul>
            </div>
        </li>
        </ul>
       
      </div>
    );
  }
}

export default Header;
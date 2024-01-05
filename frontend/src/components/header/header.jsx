import React from "react";
import AboutUs from "../about_us_modal/about_us";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "../../util/route_util";
import { PortalWithState } from "react-portal";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { click: true };
    this.logout = this.logout.bind(this);
  }

  setClick() {
    this.setState({ click: !this.state.click });
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
    this.props.router.navigate("/");
  }

  render() {
    const handleClick = () => this.setClick();
    return (
      <div className="header">
        <div className="header-logo-container">
          <Link to="/home" className="header-link">
            <img
              id="header-logo"
              src="images/trippy-logo-white.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="header-two-items-on-right">
          <PortalWithState closeOnOutsideClick closeOnEsc>
            {({ openPortal, closePortal, isOpen, portal }) => (
              <React.Fragment>
                <div className="about-us-btn">
                  <button id="about-us-btn" onClick={openPortal}>
                    <h4>About Us</h4>
                  </button>
                </div>
                {portal(<AboutUs closeModal={closePortal} />)}
              </React.Fragment>
            )}
          </PortalWithState>

          <ul className="splash-nav-bar">
            <li>
              <div className="header-dropdown" onClick={handleClick}>
                <div className="header-user-info">
                  <FontAwesomeIcon icon={faUserCircle} id="avatar" />
                  <h4>{this.props.currentUser.username}</h4>
                  <FontAwesomeIcon icon={faAngleDown} id="dropdown" />
                </div>
                <ul
                  className={this.state.click ? "dropdown clicked" : "dropdown"}
                >
                  <Link to={"/boards"} className="dropdown-option">
                    My Boards
                  </Link>
                  <Link to={"/likes"} className="dropdown-option">
                    My Likes
                  </Link>
                  <Link
                    to={"/"}
                    className="dropdown-option"
                    onClick={this.logout}
                  >
                    Log out
                  </Link>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);

import React from "react";
import HeaderContainer from "../header/header_container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLink } from "@fortawesome/free-solid-svg-icons";
import LikeContainer from "../like_item/Like_container";
import { useNavigate } from "react-router-dom";
import DropdownContainer from "./dropdown_container";

class ShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false, liked: false, look: false };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
    this.toggleDescription = this.toggleDescription.bind(this);
  }

  toggleDropdown() {
    this.setState({ clicked: !this.state.clicked });
  }

  toggleLike() {
    this.setState({ liked: !this.state.liked });
  }

  toggleDescription() {
    this.setState({ look: !this.state.look });
  }

  findPin(pins, pinId) {
    for (let i = 0; i < pins.length; i++) {
      const pin = pins[i];
      if (pin._id === pinId) return pin;
    }
  }

  componentDidMount() {
    this.props.fetchPins();
    this.props.fetchLikes(this.props.currentUser);
    this.props
      .fetchBoards(this.props.currentUser)
      .then(() =>
        this.props.boards.forEach((board) => this.props.fetchBoardPins(board))
      );
  }

  capitalize(str) {
    const letters = str.split("");
    letters[0] = letters[0].toUpperCase();
    return letters.join("");
  }

  render() {
    const { pins } = this.props;
    if (Object.values(pins).length === 0) return null;
    const pin = this.findPin(this.props.pins, this.props.router.params.pinId);
    return (
      <div className="whole-page">
        <div className="gradient show"></div>
        <HeaderContainer />
        <div className="everything-but-the-header">
          <BackButton />
          <div className="show-container-item-container">
            <div className="show-container-item">
              <div className="left-side-of-show-container">
                <img src={pin.imageURL} alt={pin.title} />
              </div>
              <div className="right-side-of-show-container">
                <div className="header-of-right-side-of-show">
                  <div className="header-button-container">
                    {this.state.clicked ? (
                      <DropdownContainer pin={pin} />
                    ) : null}
                    <button onClick={this.toggleDropdown}>Save</button>
                  </div>
                </div>
                <div className="show-page-written-content">
                  <div className="title-area-of-right-side-of-show">
                    <a href={pin.extLink} target="_blank">
                      {pin.title}
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  </div>
                  <div className="region-location">
                    <div className="region-area-of-right-side-of-show">
                      <p className="p-title">Location</p>
                      <p className="p-body">{pin.location}</p>
                    </div>
                  </div>
                  <div
                    className="description-area-of-right-side-of-show"
                    tabIndex="1"
                  >
                    <p className="p-title" id="description-title">
                      Description
                    </p>
                    {/* <p id='description-angle'><FontAwesomeIcon icon={faAngleDown}/></p> */}
                    {/* {this.state.look ? < Description description={pin.description}/> : null} */}
                    <p>{pin.description}</p>
                  </div>
                </div>
                <div className="heart">
                  <LikeContainer pin={pin} />
                </div>
              </div>
            </div>
          </div>
          <div className="spacer">
            {/* <FontAwesomeIcon icon={faArrowLeft} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowPage;

function BackButton() {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(-1)} id="left-arrow">
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
}

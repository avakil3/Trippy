import React, { Component } from 'react';
import HeaderContainer from '../header/header_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import BoardPreview from './board_preview';
// import { Portal } from 'react-portal';
import { PortalWithState } from 'react-portal';
import CreateBoardModalContainer from '../create_board_modal/create_board_modal_container';

export class BoardsIndexPage extends Component {


  constructor(props){
    super(props);
    // this.state = {modal:false};
}

    // openModal(){
    //     this.setState({ modal: true });
    //   }

    // closeModal(){
    //   this.setState({ modal: false });
    // }

    componentDidMount(){
        this.props.fetchPins();
        this.props.fetchBoards(this.props.currentUser)
            .then(()=> this.props.boards.forEach(board => this.props.fetchBoardPins(board)));
    }

    FilterBoardPins(board){
        //returns only the pins for a single board by filtering through the list of all boardPins
        const {boardPins,pins} = this.props;
        const selectedBoardPins = Object.values(boardPins).filter(boardPin => boardPin.board === board._id );
        const filteredPins = [];
        selectedBoardPins.forEach(boardPin => {
            const pin = pins.find(pin => pin._id === boardPin.pin);
            filteredPins.push(pin);
        });
        return filteredPins;
    }

  render() {
    const {boards,boardPins, pins,currentUser} = this.props;

    if(Object.values(pins).length === 0 || Object.values(boardPins).length === 0|| !currentUser  ) return null;
    return (
      <div className='body'>
            <div className='gradient likes-page'></div>
            <HeaderContainer/>
            <div className='user-header'>
              <FontAwesomeIcon icon={faUserCircle} id="header-avatar" />
              <h2>{currentUser.username}</h2>
             <h4>My Boards</h4>
            </div>
        <div className='pins-section boards'>
             <div className="image-grid">
              {boards.length > 0 ? 
              boards.map(board => <BoardPreview board={board} pins={this.FilterBoardPins(board)} key={board._id} /> ) 
              : <p>No boards made yet. [Add button here to create a board]!</p>}
            </div>
        </div>


        {/* {this.state.modal && (
          <Portal>
          <CreateBoardModalContainer />
          <p className='test' onClick={()=> this.closeModal()}> Close Modal</p>
          </Portal>
        )} */}

        <PortalWithState closeOnOutsideClick closeOnEsc>
          {({ openPortal, closePortal, isOpen, portal }) => (
            <React.Fragment>
              <div className='create-board-btn'>
                    <button id='create-board-btn'onClick={openPortal}>+ Create a New Board</button>
              </div>
      
              {portal(
                <CreateBoardModalContainer closeModal={closePortal} />
            // <button onClick={closePortal}>Close me!</button>
              )}
            </React.Fragment>
          )}
        </PortalWithState>


      </div>
    )
  }
}

export default BoardsIndexPage


import React, { Component } from 'react';
import HeaderContainer from '../header/header_container';
import Pin from '../pin_item/pin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";
import { PortalWithState } from 'react-portal';
import EditBoardModalContainer from '../edit_board_modal/edit_board_modal_container';

export class BoardShowPage extends Component {

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
    const {boardPins, boards, pins,currentUser} = this.props;
    if(Object.values(pins).length === 0 || Object.values(boardPins).length === 0 || !currentUser  ) return null;
   
    const board = boards.find(board => board._id === this.props.router.params.boardId);

    const filteredPins = this.FilterBoardPins(board);
  
    return (
      <div className='body'>
            <div className='gradient likes-page'></div>
            <HeaderContainer/>
            <div className='user-header'>
              <div className='edit-board-container'>
                <h2>{board.name}</h2>
             
               <PortalWithState closeOnOutsideClick closeOnEsc>
                 {({ openPortal, closePortal, isOpen, portal }) => (
                  <React.Fragment>
                     <div className='circle' onClick={openPortal} > <FontAwesomeIcon icon={faEllipsis} /></div>

                    {portal(
                      <EditBoardModalContainer closeModal={closePortal} />
                    )}
                  </React.Fragment>
                  )}
                </PortalWithState>
    
              </div>
              <h4>{filteredPins.length} Pins</h4>
            </div>
        <div className='pins-section boards'>
            <div className='image-grid'>
                    {filteredPins.length > 0 ? 
                    filteredPins.map(pin => <Pin pin={pin} key={pin._id} />  ) 
                    : <div className='placeholder'>
                    <img id='placeholderImage' src="/images/imagePlaceholder.webp" alt="" />
                    Board does not contain pins. Add some pins!
                  </div>}
                </div>
        </div>

        
      </div>
    )
  }
}

export default BoardShowPage


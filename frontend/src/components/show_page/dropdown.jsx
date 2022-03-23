import React from "react";
import ToggleSaveButtonContainer from "../toggle_save_button/toggle_save_button_container";
import CreateBoardModalContainer from '../create_board_modal/create_board_modal_container';
import { PortalWithState } from 'react-portal';


class Dropdown extends React.Component{

    findBoardPin(board,pin){
          return Object.values(this.props.boardPins).find(boardPin => boardPin.board === board._id && boardPin.pin === pin._id);  
    }

    render(){
        const {boards,pin,boardPins} = this.props;
        return(
            <div className="show-dropdown">
                <div className="dropdown-content">
                    {
                        boards.map(board => 
                            <div className="dropdown-row" key={board._id}> 
                                <p>{board.name} </p>
                                <ToggleSaveButtonContainer pin={pin} board={board} boardPin={this.findBoardPin(board,pin)}/>
                            </div>
                        )
                    }

                    <PortalWithState closeOnOutsideClick closeOnEsc>
                        {({ openPortal, closePortal, isOpen, portal }) => (
                            <React.Fragment>
                            <div >
                                    <p id='dropdown-create-board-btn' onClick={openPortal}>+ Create a New Board</p>
                            </div>
                            {portal(
                                <CreateBoardModalContainer closeModal={closePortal} />
                            )}
                            </React.Fragment>
                        )}
                        </PortalWithState>
                </div>
            </div>
        )
    }
}

export default Dropdown;
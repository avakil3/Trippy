import React, { Component } from 'react'

export class ToggleSaveButton extends Component {
    constructor(props){
        super(props);
        this.state ={saved:false};
    }

    handleClick(){
        const {boardPin,createNewBoardPin,deleteBoardPin,pin,board} = this.props;
        if (boardPin) {
            deleteBoardPin(boardPin)
        }else{
            const newBoardPin = {
                board: board._id,
                pin: pin._id
            }
            createNewBoardPin(newBoardPin);
        }
    }
  
    render() {
        const {boardPin} = this.props;
    return (
      <div className={boardPin ? 'dropdown-save-btn unsave' : 'dropdown-save-btn'} onClick={()=> this.handleClick()}>
          <p>{boardPin ? "Unsave": "Save"}</p>
      </div>
    )
  }
}

export default ToggleSaveButton
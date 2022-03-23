import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BoardPreviewImage from './board_preview_image';

export class BoardPreview extends Component {


  render() {
    const {board,pins} = this.props;
    return(
        <div className="board-container">
          <Link to={`/boards/${board._id}`}> <BoardPreviewImage pins={pins}/> </Link>
          <h1 className="board-preview-name">{board.name}</h1>
          <h1 className="board-preview-sub-text">{pins.length} Pins</h1>
        </div>
      );
  }
}

export default BoardPreview
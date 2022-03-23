import React, { Component } from 'react'
import {Route, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export class EditBoardModal extends Component {

    constructor(props) {
        super(props);      
        this.board = this.props.boards.find(board => board._id === this.props.router.params.boardId);
        this.state = {
          _id: this.board._id,
          name: this.board.name,
          error: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleDelete(board){
        this.props.deleteBoard(board)
            // .then( ()=> this.props.router.navigate('/boards'));
            this.props.router.navigate('/boards');
      }

    handleSubmit(e) {
        e.preventDefault();
        this.state.name ? 
          this.setState({error:""}) : 
          this.setState({error:"Board must have a name"});
        
        this.props.editBoard(this.state)
            .then( ()=> this.props.closeModal());
    }
      
    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    render() {
        const board = this.props.boards.find(board => board._id === this.props.router.params.boardId);
        return (
            <div className="board-modal-container">
              <h1>Edit board</h1>
              <form onSubmit={this.handleSubmit}>
                    <h2>Name</h2> 
                    <input
                    id="name"
                    type='text'
                    placeholder="Edit board name"
                    value={this.state.name}
                    onChange={this.update('name')}  
                    />
                    <h3 className="error">{this.state.error}</h3>
                <div id='edit-board-btns'>
                    <button id="boardSubmit" type='submit'>Done</button>
                    <button id="deleteBoardBtn" onClick={()=> this.handleDelete(board)}>Delete</button>
                </div>
              </form>
            </div>
        );
      }
}

export default EditBoardModal


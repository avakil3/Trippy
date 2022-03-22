import React, { Component } from 'react'

export class CreateBoardModal extends Component {

    constructor(props) {
        super(props);        
        this.state = {
          name: '',
          error: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    
    handleSubmit(e) {
        e.preventDefault();
        this.state.name ? 
          this.setState({error:""}) : 
          this.setState({error:"Board must have a name"});
     
        this.props.createNewBoard(this.state, this.props.currentUser)
            .then( ()=> this.props.closeModal());
      }
      
      update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
      }

    render() {
        return (
            <div className="create-board-modal-container">
              <h1>Create board</h1>
              <form onSubmit={this.handleSubmit}>
                    <h2>Name</h2> 
                    <input
                    id="name"
                    type='text'
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.update('name')}  
                    />
                    <h3 className="error">{this.state.error}</h3>
    
                <button id="boardSubmit" type='submit'>Create</button>
              </form>
            </div>
        );
      }
}

export default CreateBoardModal
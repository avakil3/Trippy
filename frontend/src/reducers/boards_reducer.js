import * as BoardActions from '../actions/board_actions';
  
  const BoardsReducer = (state = { }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case BoardActions.RECEIVE_BOARDS:
        return action.boards.data;
      case BoardActions.RECEIVE_BOARD:
        newState = state.slice().concat(action.board.data);
        return newState;
      case BoardActions.UPDATE_BOARD:
        newState = state.map((board)=>{ 
          if (board._id === action.board._id){
            board.name = action.board.name;
          }
          return board;
        });
        return newState;
      case BoardActions.DELETE_BOARD:
        return Object.values(state).filter((board)=> board._id !== action.board._id);
      default:
        return state;
    }
  };
  
  export default BoardsReducer;
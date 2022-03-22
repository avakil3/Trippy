import * as BoardActions from '../actions/board_actions';
  
  const BoardPinsReducer = (state = { }, action) => {
    Object.freeze(state);
    switch(action.type) {
      case BoardActions.RECEIVE_BOARD_PINS:
        let newState = Object.assign({}, state);
       action.boardPins.data.forEach(boardPin => {
         newState[boardPin._id] = boardPin;
       });
        return newState;
      default:
        return state;
    }
  };
  
  export default BoardPinsReducer;
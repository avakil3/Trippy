import * as BoardActions from '../actions/board_actions';
  
  const BoardPinsReducer = (state = { }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case BoardActions.RECEIVE_BOARD_PINS:
       action.boardPins.data.forEach(boardPin => {
         newState[boardPin._id] = boardPin;
       });
       return newState;
      case BoardActions.RECEIVE_BOARD_PIN:
        newState[action.boardPin.data._id] = action.boardPin.data;
        return newState;
      case BoardActions.DELETE_BOARD_PIN:
        delete newState[action.boardPin._id];
        return newState;
      default:
        return state;
    }
  };
  
  export default BoardPinsReducer;
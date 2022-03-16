import * as LikeActions from '../actions/like_actions';
  
  const LikesReducer = (state = { }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case LikeActions.RECEIVE_LIKES:
        return action.likes.data;
      default:
        return state;
    }
  };
  
  export default LikesReducer;
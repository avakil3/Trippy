import * as LikeActions from '../actions/like_actions';
  
  const LikesReducer = (state = { }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case LikeActions.RECEIVE_LIKES:
        return action.likes.data;
      case LikeActions.RECEIVE_LIKE:
        // debugger
        newState = state.slice().concat(action.like.data);
        return newState;
      case LikeActions.DELETE_LIKE:
        return Object.values(state).filter((like)=> like._id !== action.like._id);
      default:
        return state;
    }
  };
  
  export default LikesReducer;
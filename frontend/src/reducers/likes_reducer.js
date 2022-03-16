import * as LikeActions from '../actions/like_actions';
  
  const LikesReducer = (state = { }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case LikeActions.RECEIVE_LIKES:
        return action.likes.data;
      case LikeActions.RECEIVE_LIKE:
        return Object.assign({},action.tweet, state);
      case LikeActions.DELETE_LIKE:
        debugger
        delete newState[action.like._id];
        return Object.assign({},action.tweet, state);;
      default:
        return state;
    }
  };
  
  export default LikesReducer;
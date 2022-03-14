import * as PinActions from '../actions/pin_actions';
  
  const PinsReducer = (state = { }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case PinActions.RECEIVE_PINS:
        return action.pins.data;
    //   case RECEIVE_USER_TWEETS:
    //     newState.user = action.tweets.data;
    //     return newState;
    //   case RECEIVE_NEW_TWEET:
    //     newState.new = action.tweet.data
    //     return newState;
      default:
        return state;
    }
  };
  
  export default PinsReducer;
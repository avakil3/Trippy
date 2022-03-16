import { RECEIVE_CURRENT_USER, 
    RECEIVE_USER_LOGOUT, 
    RECEIVE_USER_SIGN_IN } from '../actions/session_actions';

const initialState = {
isAuthenticated: false,
user: {},
isSignedIn: false
};

export default function(state = initialState, action) {
switch (action.type) {
case RECEIVE_CURRENT_USER:
 return {
   ...state,
   isAuthenticated: !!action.currentUser,
   user: action.currentUser
 };
case RECEIVE_USER_LOGOUT:
 return {
   isAuthenticated: false,
   user: undefined,
   isSignedIn: false
 };
case RECEIVE_USER_SIGN_IN:
 return {
   ...state,
   user: action.user,
   isSignedIn: true,
   isAuthenticated: true
 }
default:
 return state;
}
}
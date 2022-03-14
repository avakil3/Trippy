
   
import { combineReducers } from 'redux';

import PinsReducer from './pins_reducer';

export default combineReducers({
//   users: usersReducer,
    pins: PinsReducer
});
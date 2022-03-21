import { combineReducers } from 'redux';
import PinsReducer from './pins_reducer';
import LikesReducer from './likes_reducer'
import BoardsReducer from './boards_reducer'

export default combineReducers({
//   users: usersReducer,
    pins: PinsReducer,
    likes: LikesReducer,
    boards: BoardsReducer
});
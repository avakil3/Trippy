import * as APIUtil from '../util/likes_api_util';
export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const CREATE_LIKE = "CREATE_LIKE";
export const DELETE_LIKE = "DELETE_LIKE";

export const receiveUserLikes = likes => ({
    type: RECEIVE_LIKES,
    likes
  });

  export const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
  });

  export const createLike = pin => ({
    type: CREATE_LIKE,
    pin
  });

  export const removeLike = like => ({
    type: DELETE_LIKE,
    like
  });


  export const fetchLikes = (user) => dispatch => (
    APIUtil.receiveUserLikes(user)
      .then(likes => dispatch(receiveUserLikes(likes)))
      .catch(err => console.log(err))
  );


  export const createNewLike = (pin,user) => dispatch => (
    APIUtil.createLike(pin,user)
      .then(like => dispatch(receiveLike(like)))
      .catch(err => console.log(err))
  );

  export const deleteLike = (like) => dispatch => (
    APIUtil.deleteLike(like)
      .then(() => dispatch(removeLike(like)))
      .catch(err => console.log(err))
  );
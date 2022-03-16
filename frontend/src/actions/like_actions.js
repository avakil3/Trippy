import * as APIUtil from '../util/likes_api_util';
export const RECEIVE_LIKES = "RECEIVE_LIKES";

export const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes
  });


  export const fetchLikes = (user) => dispatch => (
    APIUtil.receiveLikes(user)
      .then(likes => dispatch(receiveLikes(likes)))
      .catch(err => console.log(err))
  );
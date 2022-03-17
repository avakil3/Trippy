import axios from 'axios';

export const receiveUserLikes = (user) => {
    return axios.get(`/api/likes/${user.id}`);
};


export const createLike = (pin,user) => {
    // debugger
    return axios.post(`/api/likes/${user.id}`, pin)
  }

  export const deleteLike = (like) => {
    // debugger
    return axios.delete(`/api/likes/`, { data: like })
  }
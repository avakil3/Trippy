import axios from 'axios';

export const receiveUserBoards = (user) => {
    return axios.get(`/api/boards/${user.id}`);
};


export const createBoard = (board,user) => {
    // debugger
    return axios.post(`/api/boards/${user.id}`, board)
  }

  export const deleteBoard = (board) => {
    // debugger
    return axios.delete(`/api/boards/`, { data: board })
  }
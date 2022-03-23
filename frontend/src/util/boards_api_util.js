import axios from 'axios';

export const receiveUserBoards = (user) => {
    return axios.get(`/api/boards/${user.id}`);
};

export const receiveBoardPins = (board) => {
  return axios.get(`/api/boardPins/${board._id}`);
};


export const createBoard = (board,user) => {
    // debugger
    return axios.post(`/api/boards/${user.id}`, board)
}

export const updateBoard = (board) => {
  // debugger
  return axios.patch(`/api/boards/`, board)
}

export const deleteBoard = (board) => {
  // debugger
  return axios.delete(`/api/boards/`, { data: board })
}



export const createBoardPin = (boardPin) => {
  // debugger
  return axios.post(`/api/boardPins/`, boardPin)
}


export const deleteBoardPin = (boardPin) => {
  // debugger
  return axios.delete(`/api/boardPins/`, { data: boardPin })
}

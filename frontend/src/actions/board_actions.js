import * as APIUtil from '../util/boards_api_util';
export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const CREATE_BOARD = "CREATE_BOARD";
export const DELETE_BOARD = "DELETE_BOARD";

export const receiveUserBoards = boards => ({
    type: RECEIVE_BOARDS,
    boards
  });

  export const receiveBoard = board => ({
    type: RECEIVE_BOARD,
    board
  });

  export const createBoard = board => ({
    type: CREATE_BOARD,
    board
  });

  export const removeBoard = board => ({
    type: DELETE_BOARD,
    board
  });


  export const fetchBoards = (user) => dispatch => (
    APIUtil.receiveUserBoards(user)
      .then(boards => dispatch(receiveUserBoards(boards)))
      .catch(err => console.log(err))
  );


  export const createNewBoard = (board,user) => dispatch => (
    APIUtil.createBoard(board,user)
      .then(board => dispatch(receiveBoard(board)))
      .catch(err => console.log(err))
  );

  export const deleteBoard = (board) => dispatch => (
    APIUtil.deleteBoard(board)
      .then(() => dispatch(removeBoard(board)))
      .catch(err => console.log(err))
  );
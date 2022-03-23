import * as APIUtil from '../util/boards_api_util';
export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const RECEIVE_BOARD_PINS = "RECEIVE_BOARD_PINS";
export const RECEIVE_BOARD_PIN = "RECEIVE_BOARD_PIN";
export const CREATE_BOARD = "CREATE_BOARD";
export const CREATE_BOARD_PIN = "CREATE_BOARD_PIN";
export const DELETE_BOARD_PIN = "DELETE_BOARD_PIN";
export const UPDATE_BOARD = "UPDATE_BOARD";
export const DELETE_BOARD = "DELETE_BOARD";

export const receiveUserBoards = boards => ({
    type: RECEIVE_BOARDS,
    boards
  });


  export const receiveBoard = board => ({
    type: RECEIVE_BOARD,
    board
  });

  
  export const receiveBoardPins= boardPins => ({
    type: RECEIVE_BOARD_PINS,
    boardPins
  });

  export const receiveBoardPin= boardPin => ({
    type: RECEIVE_BOARD_PIN,
    boardPin
  });

  export const createBoard = board => ({
    type: CREATE_BOARD,
    board
  });


  export const updateBoard = board => ({
    type: UPDATE_BOARD,
    board
  });

  export const removeBoard = board => ({
    type: DELETE_BOARD,
    board
  });


  export const removeBoardPin = boardPin => ({
    type: DELETE_BOARD_PIN,
    boardPin
  });

  export const fetchBoards = (user) => dispatch => (
    APIUtil.receiveUserBoards(user)
      .then(boards => dispatch(receiveUserBoards(boards)))
      .catch(err => console.log(err))
  );

  export const fetchBoardPins = (board) => dispatch => (
    APIUtil.receiveBoardPins(board)
      .then(boardPins => dispatch(receiveBoardPins(boardPins)))
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

  export const editBoard = (board) => dispatch => (
    APIUtil.updateBoard(board)
      .then(() => dispatch(updateBoard(board)))
      .catch(err => console.log(err))
  );



  export const createNewBoardPin = (boardPin) => dispatch => (
    APIUtil.createBoardPin(boardPin)
      .then(boardPin => dispatch(receiveBoardPin(boardPin)))
      .catch(err => console.log(err))
  );


  export const deleteBoardPin = (boardPin) => dispatch => (
    APIUtil.deleteBoardPin(boardPin)
      .then(() => dispatch(removeBoardPin(boardPin)))
      .catch(err => console.log(err))
  );
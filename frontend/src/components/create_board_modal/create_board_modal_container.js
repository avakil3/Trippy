import { connect } from 'react-redux';
import CreateBoardModal from './create_board_modal';
import { fetchPins } from '../../actions/pin_actions';
import { fetchBoards,fetchBoardPins, createNewBoard } from '../../actions/board_actions';

const mapStateToProps = ({ session, entities: { pins, boardPins,boards} }) => {
  return {
    currentUser: (session.user ? session.user : null),
    pins,
    boards,
    boardPins
  };
};

const mapDispatchToProps = dispatch => ({
    // fetchPins: ()=> dispatch(fetchPins()),
    // fetchBoards: (user)=> dispatch(fetchBoards(user)),
    // fetchBoardPins: (board)=> dispatch(fetchBoardPins(board)),
    createNewBoard: (board,user) => dispatch(createNewBoard(board,user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBoardModal);
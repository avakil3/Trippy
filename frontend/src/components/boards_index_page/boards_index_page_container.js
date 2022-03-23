import { connect } from 'react-redux';
import BoardsIndexPage from './boards_index_page';
import { fetchPins } from '../../actions/pin_actions';
import { fetchBoards,fetchBoardPins } from '../../actions/board_actions';

const mapStateToProps = ({ session, entities: { pins, boardPins,boards} }) => {
  return {
    currentUser: (session.user ? session.user : null),
    pins,
    boards,
    boardPins
  };
};

const mapDispatchToProps = dispatch => ({
    fetchPins: ()=> dispatch(fetchPins()),
    fetchBoards: (user)=> dispatch(fetchBoards(user)),
    fetchBoardPins: (board)=> dispatch(fetchBoardPins(board)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardsIndexPage);
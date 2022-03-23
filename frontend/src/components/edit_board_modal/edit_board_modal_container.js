import { connect } from 'react-redux';
import EditBoardModal from './edit_board_modal';
import {  deleteBoard,editBoard } from '../../actions/board_actions';
import { withRouter } from '../../util/route_util';


const mapStateToProps = ({ session, entities: { pins, boardPins,boards} }) => {

  return {
    currentUser: (session.user ? session.user : null),
    boards,
  };
};

const mapDispatchToProps = dispatch => ({
    deleteBoard: (board) => dispatch(deleteBoard(board)),
    editBoard: (board) => dispatch(editBoard(board)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditBoardModal));
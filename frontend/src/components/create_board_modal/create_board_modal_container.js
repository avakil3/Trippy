import { connect } from 'react-redux';
import CreateBoardModal from './create_board_modal';
import {  createNewBoard } from '../../actions/board_actions';

const mapStateToProps = ({ session, entities: { pins, boardPins,boards} }) => {
  return {
    currentUser: (session.user ? session.user : null),
  };
};

const mapDispatchToProps = dispatch => ({
    createNewBoard: (board,user) => dispatch(createNewBoard(board,user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBoardModal);
import { connect } from 'react-redux';
import MainPage from './main_page';
import { fetchPins } from '../../actions/pin_actions';
import { fetchLikes } from '../../actions/like_actions';
import { fetchBoards } from '../../actions/board_actions';

const mapStateToProps = ({ session, entities: { pins} }) => {
  return {
    currentUser: (session.user ? session.user : null),
    pins
  };
};

const mapDispatchToProps = dispatch => ({
    fetchPins: ()=> dispatch(fetchPins()),
    fetchLikes: (user)=> dispatch(fetchLikes(user)),
    fetchBoards: (user)=> dispatch(fetchBoards(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
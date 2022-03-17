import { connect } from 'react-redux';
import LikesShowPage from './like_show_page';
import { fetchPins } from '../../actions/pin_actions';
import { fetchLikes } from '../../actions/like_actions';

const mapStateToProps = ({ session, entities: { users, pins , likes} }) => {
  return {
    currentUser: (session.user ? session.user : null),
    pins,
    likes
  };
};

const mapDispatchToProps = dispatch => ({
    fetchPins: ()=> dispatch(fetchPins()),
    fetchLikes: (user)=> dispatch(fetchLikes(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikesShowPage);
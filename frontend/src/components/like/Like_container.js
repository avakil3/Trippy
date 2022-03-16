import { connect } from 'react-redux';
import Like from './like';
import { fetchLikes, createNewLike, deleteLike } from '../../actions/like_actions';

const mapStateToProps = ({ session, entities: { users, pins , likes} }) => {
  return {
    currentUser: (session.user ? session.user : null),
    likes
  };
};

const mapDispatchToProps = dispatch => ({
    // fetchPins: ()=> dispatch(fetchPins()),
    // fetchLikes: (user)=> dispatch(fetchLikes(user)),
    createNewLike: (pin,user)=> dispatch(createNewLike(pin,user)),
    deleteLike: (like) => dispatch(deleteLike(like))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Like);
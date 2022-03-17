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
    createNewLike: (pin,user)=> dispatch(createNewLike(pin,user)),
    deleteLike: (like) => dispatch(deleteLike(like))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Like);
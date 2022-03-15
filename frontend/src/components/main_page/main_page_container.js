import { connect } from 'react-redux';
import MainPage from './main_page';
import { fetchPins } from '../../actions/pin_actions';

const mapStateToProps = ({ session, entities: { users, pins } }) => {
  return {
    // currentUser: (session.currentUser ? users[session.currentUser.id]: null),
    pins
  };
};

const mapDispatchToProps = dispatch => ({
    fetchPins: ()=> dispatch(fetchPins())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
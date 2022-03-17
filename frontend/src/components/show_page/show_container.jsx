import { connect } from "react-redux"
import ShowPage from "./show_page";
import { withRouter } from "../../util/route_util";
import {fetchPins} from '../../actions/pin_actions'; 
import { fetchLikes } from '../../actions/like_actions';

const mapStateToProps = ({ session, entities: { pins,likes} }) => {

    return ( {
        currentUser: (session.user ? session.user : null),
        pins,
        likes
    })
}

const mDTP = (dispatch) => ({
    fetchPins: () => dispatch(fetchPins()),
    fetchLikes: (user)=> dispatch(fetchLikes(user))
})

export default withRouter(connect(mapStateToProps, mDTP)(ShowPage))
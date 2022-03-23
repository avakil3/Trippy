import { connect } from "react-redux"
import ShowPage from "./show_page";
import { withRouter } from "../../util/route_util";
import {fetchPins} from '../../actions/pin_actions'; 
import { fetchLikes } from '../../actions/like_actions';
import { fetchBoards, fetchBoardPins } from "../../actions/board_actions";

const mapStateToProps = ({ session, entities: { pins,likes,boards} }) => {

    return ( {
        currentUser: (session.user ? session.user : null),
        pins,
        likes,
        boards
    })
}

const mDTP = (dispatch) => ({
    fetchPins: () => dispatch(fetchPins()),
    fetchLikes: (user)=> dispatch(fetchLikes(user)),
    fetchBoards: (user) => dispatch(fetchBoards(user)),
    fetchBoardPins: (board) => dispatch(fetchBoardPins(board)),

})

export default withRouter(connect(mapStateToProps, mDTP)(ShowPage))
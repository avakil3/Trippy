import { connect } from "react-redux"
import ShowPage from "./show_page";
import { withRouter } from "../../util/route_util";
import {fetchPins} from '../../actions/pin_actions'; 
const mapStateToProps = ({ entities: { pins} }) => {

    return (
    {
        pins
    })
}

const mDTP = (dispatch) => ({
    fetchPins: () => dispatch(fetchPins())
})

export default withRouter(connect(mapStateToProps, mDTP)(ShowPage))
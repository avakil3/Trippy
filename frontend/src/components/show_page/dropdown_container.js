import { connect } from "react-redux"
import Dropdown from "./dropdown";

const mapStateToProps = ({ session, entities: { boards, boardPins} }) => {
    return ( {
        currentUser: (session.user ? session.user : null),
        boards,
        boardPins
    })
}

const mDTP = (dispatch) => ({

})

export default connect(mapStateToProps, mDTP)(Dropdown);
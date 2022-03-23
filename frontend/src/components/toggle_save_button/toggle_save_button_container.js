import { connect } from "react-redux"
import ToggleSaveButton from "./toggle_save_button"
import { createNewBoardPin, deleteBoardPin } from "../../actions/board_actions";

const mSTP = ({ session, entities: { boards, boardPins} }) => {
    return ( {
        currentUser: (session.user ? session.user : null),
        boards,
        boardPins
    })
}

const mDTP = (dispatch) => ({
    createNewBoardPin: boardPin => dispatch(createNewBoardPin(boardPin)),
    deleteBoardPin: boardPin => dispatch(deleteBoardPin(boardPin)),
})

export default connect(mSTP, mDTP)(ToggleSaveButton);
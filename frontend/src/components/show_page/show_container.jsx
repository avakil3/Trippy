import React from "react";
import { connect } from "react-redux"
import ShowPage from "./show_page";

const mSTP = (state, ownProps) => ({
    // pin: state.entities.pins[ownProps.match.params.pinId]
})

export default connect(mSTP, null)(ShowPage)
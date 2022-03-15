import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class Dropdown extends React.Component{
    render(){
        return(
            <div className="show-dropdown">
                <ul>
                    <li>N America</li>
                    <li>S America</li>
                    <li>Africa</li>
                    <li>Asia</li>
                    <li>Australia</li>
                    <li>Europe</li>
                    <li id="add-board"><FontAwesomeIcon icon={faPlus} id="add-icon"/><p>Add Board</p></li>
                </ul>
            </div>
        )
    }
}

export default Dropdown;
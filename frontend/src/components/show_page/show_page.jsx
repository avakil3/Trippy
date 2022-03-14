import React from 'react';
import HeaderContainer from '../header/header_container';

class ShowPage extends React.Component{


    render(){
        return(
            <div className='whole-page'>
                <HeaderContainer/>
                <div className='everything-but-the-header'>
                    <div className='show-container-item'>
                        <div className='left-side-of-show-container'>
                            <img src="images/showpage_placeholder.png" />
                        </div>
                        <div className='right-side-of-show-container'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowPage;
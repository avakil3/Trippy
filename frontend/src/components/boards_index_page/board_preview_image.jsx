import React, { Component } from 'react'

export class BoardPreviewImage extends Component {

  render() {
      const {pins} = this.props;
    return (
      <div className='board-img-container'>
            {
              pins[0] ? <img className="left-image" src={pins[0].imageURL} /> : <img className="left-image" src='/images/imagePlaceholder.webp' />
            }

            <div className="right-side-images"> 
            {
                pins[1] ? <img className="top-right-image" src={pins[1].imageURL} /> : <img className="top-right-image" src='/images/imagePlaceholder.webp' />
            }   

            {
                pins[2] ? <img className="bottom-right-image" src={pins[2].imageURL} /> : <img className="bottom-right-image" src='/images/imagePlaceholder.webp' />
            } 
            </div>
      </div>
    )
  }
}

export default BoardPreviewImage
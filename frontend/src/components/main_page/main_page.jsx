import React from 'react';
import HeaderContainer from '../header/header_container';
import {PinsFilter} from '../../util/selectors';
import PinContainer from '../pin_item/pin_container';

class MainPage extends React.Component {

  constructor(props){
    super(props)
    this.state = {filteredPins: [],
    anywhere: true, //refers to region filter
    northAmerica: false,
    asia: false,
    europe: false,
    africa: false,
    any: true, //refers to tripType filter
    relaxation:false,
    adventure: false,
    camping: false,
    roadTrip: false

  };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.props.fetchPins()
      .then(()=> this.setState({filteredPins: Object.values(this.props.pins)}));

    this.props.fetchLikes(this.props.currentUser);
  }


  handleChange(e){
    // debugger
      this.setState({[e.target.value]: e.target.checked},()=> {
        this.setState({filteredPins: PinsFilter(this.props.pins,this.state)});
      })
    }

    deleteTest(){
      this.props.deleteLike(Object.values(this.props.likes)[0])
    }

  render() {
    // if (Object.values(this.props.likes) === 0) return null;
    const {likes} = this.props;
    const likedPinIds = Object.values(likes).map(pin => pin.pin);

    return (
      <div className='body'>
        <HeaderContainer/>
        <div className='filters-section'>
          <h1>Discover Unique Destinations and Experiences</h1>
          {/* <button onClick={()=> this.deleteTest()}>Delete Like</button> */}
          <div className='filters'>
            <div className='region'>
              <label>Where do you want to travel?</label>

            <div className='checkboxes'>
            <label for="anywhere">
              <input type="checkbox" defaultChecked="true" name="region" value="anywhere" id='anywhere' onChange={this.handleChange}/>
              Anywhere
            </label>

            <label for="northAmerica">
              <input type="checkbox" name="region" value="northAmerica" id='northAmerica' onChange={this.handleChange}/>
              North America
            </label>

            <label for="asia">
              <input type="checkbox" name="region" value="asia" id='asia' onChange={this.handleChange}/>
              Asia
            </label>

            <label for="europe">
              <input type="checkbox" name="region" value="europe" id='europe' onChange={this.handleChange}/>
              Europe
            </label>

            <label for="africa">
              <input type="checkbox" name="region" value="africa" id='africa' onChange={this.handleChange}/>
              Africa
            </label>
            
            </div>
            </div>
            <div className="trip-type">
            <label>What type of trip?</label>
           
            <div className='checkboxes'>
            <label for="any">
              <input type="checkbox" defaultChecked="true" name="tripType" value="any" id='any' onChange={this.handleChange}/>
              Any
            </label>

            <label for="relaxation">
              <input type="checkbox" name="tripType" value="relaxation" id='relaxation' onChange={this.handleChange}/>
              Relaxation
            </label>

            <label for="adventure">
              <input type="checkbox" name="tripType" value="adventure" id='adventure' onChange={this.handleChange}/>
              Adventure
            </label>

            <label for="camping">
              <input type="checkbox" name="tripType" value="camping" id='camping' onChange={this.handleChange}/>
              Camping
            </label>

            <label for="roadTrip">
              <input type="checkbox" name="tripType" value="roadTrip" id='roadTrip' onChange={this.handleChange}/>
              Road Trip
            </label>
            </div>
            </div>
          </div>
        </div>

        <div className='pins-section'>
          <h2>Destinations and experiences trending across your selections</h2>
          <hr />
          <div className="image-grid">
              {this.state.filteredPins.map((pin)=> <PinContainer pin={pin} liked={likedPinIds.includes(pin._id) ? true : false} imgDimensions={imgDimensions()} key={pin._id} /> )}
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;

function imgDimensions(){
  // const widthArr = [1,2,3];
  const heightArr = [1,2,3];
  // const randomColWidth = widthArr[Math.floor(Math.random()* widthArr.length)];
  const randomColHeight = heightArr[Math.floor(Math.random()* heightArr.length)];
  return `gallery-container h-${randomColHeight}`;
}
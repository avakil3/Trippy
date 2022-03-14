import React from 'react';
import HeaderContainer from '../header/header_container';
import {PinsFilter} from '../../util/selectors'

class MainPage extends React.Component {

  constructor(props){
    super(props)
    this.state = {filteredPins: Object.values(this.props.pins)};
  }

  componentDidMount(){
    this.props.fetchPins()
  }

  componentDidUpdate(){
    const regionSelector = document.getElementById("region");
    const tripTypeSelector = document.getElementById("tripType");
    if (Object.values(this.props.pins).length > 0){
      // this.setState({filteredPins: PinsFilter(this.props.pins,regionSelector.value,tripTypeSelector.value)});
    }
  }

  render() {
    return (
      <div className='body'>
        <HeaderContainer/>
        <div className='filters-section'>
          <h1>Discover Unique Destinations and Experiences</h1>
          <div className='filters'>
            <div className='region'>
              <label>Where do you want to travel?</label>
            <select id="region" defaultValue='anywhere'>
              <option value="anywhere">Anywhere</option>
              <option value="north-america">North America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="south-america">South America</option>
              <option value="africa">Africa</option>
            </select>
            </div>
            <div className="trip-type">
            <label>What type of trip?</label>
            <select id="trip-type" defaultValue='any'>
              <option value="any">Any</option>
              <option value="relaxation">Relaxation</option>
              <option value="adventure">Adventure</option>
              <option value="camping">Camping</option>
            </select>
            </div>
          </div>
        </div>

        <div className='pins-section'>
          <h2>Destinations and experiences trending in [ ]</h2>
          <hr />
              {
                  this.state.filteredPins.map((pin)=> <div key={pin.id} className='pin'>I'm a pin</div> )
              }

        </div>
      </div>
    );
  }
}

export default MainPage;
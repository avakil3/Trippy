import React from 'react';
import HeaderContainer from '../header/header_container';

class MainPage extends React.Component {

  render() {
    return (
      <div className='body'>
        <HeaderContainer/>
        <div className='filters-section'>
          <h1>Discover Unique Destinations and Experiences</h1>
          <div className='filters'>
            <div className='region'>
              <label>Where do you want to travel?</label>
            <select id="region">
              <option selected value="anywhere">Anywhere</option>
              <option value="north-america">North America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="south-america">South America</option>
              <option value="africa">Africa</option>
            </select>
            </div>
            <div className="trip-type">
            <label>What type of trip?</label>
            <select id="trip-type">
              <option selected value="any">Any</option>
              <option value="relaxation">Relaxation</option>
              <option value="adventure">Adventure</option>
              <option value="camping">Camping</option>
            </select>
            </div>
          </div>
        </div>

        <div className='pins-section'>
          <h2>Destinations and experiences trending in [ ]</h2>
        </div>
      </div>
    );
  }
}

export default MainPage;
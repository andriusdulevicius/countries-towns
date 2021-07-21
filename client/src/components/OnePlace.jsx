import React, { Component } from 'react';

class OnePlace extends Component {
  state = {};
  render() {
    const { _id, title, mainLand, population, countryOrCity } = this.props.onePlace;
    return (
      <div className='onePlace'>
        <div className='oneCard'>
          <h2>
            {countryOrCity === 'city' ? 'City:' : 'Country:'} {title}
          </h2>
          <h3>Main land: {mainLand}</h3>
          <h3>Population: {population}</h3>
          <div className='buttons'>
            <button className='edit-btn mr-1' onClick={() => this.props.onEdit(_id)}>
              Edit
            </button>
            <button className='delete-btn' onClick={() => this.props.onDelete(_id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default OnePlace;

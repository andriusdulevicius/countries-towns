import React, { Component } from 'react';
import { getAllPlaces } from '../service/fetchData';
import OnePlace from './OnePlace';

class AllPlaces extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allPlacesData: [],
    };
  }

  componentDidMount() {
    this.loadAllPlaces();
  }

  loadAllPlaces = async () => {
    const result = await getAllPlaces();
    this.setState({ allPlacesData: result });
  };

  render() {
    return (
      <div className='allPlaces'>
        {this.state.allPlacesData.map((place) => (
          <OnePlace key={place._id} onePlace={place} />
        ))}
      </div>
    );
  }
}

export default AllPlaces;

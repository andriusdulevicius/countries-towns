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

  componentDidMount = async () => {
    await this.loadAllPlaces();
  };

  loadAllPlaces = async () => {
    const result = await getAllPlaces();
    this.setState({ allPlacesData: result });
  };

  filterOneKind = (kind) => {
    console.log(`filtering ${kind} from ${this.state.allPlacesData}`);
    this.state.allPlacesData && this.state.allPlacesData.filter((place) => place.countryOrCity === kind);
  };

  render() {
    return (
      <div className='main-page'>
        <h1 className='main-header'>Here you can see a list of interesting places..</h1>
        <button onClick={() => this.filterOneKind('city')} className='primary-btn mr-1'>
          Cities
        </button>
        <button onClick={() => this.filterOneKind('country')} className='primary-btn'>
          Countries
        </button>
        <div className='allPlaces'>
          {this.state.allPlacesData.map((place) => (
            <OnePlace key={place._id} onePlace={place} />
          ))}
        </div>
      </div>
    );
  }
}

export default AllPlaces;

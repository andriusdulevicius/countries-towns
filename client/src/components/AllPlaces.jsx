import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { getAllPlaces, deleteOnePlace } from '../service/fetchData';
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

  handleDelete = async (userId) => {
    await deleteOnePlace(userId);
    this.loadAllPlaces();
    toast.error(`A place has been deleted.`);
  };

  filterOneKind = async (kind) => {
    const allPlaces = await getAllPlaces();
    const filtered = allPlaces.filter((place) => place.countryOrCity === kind);
    this.setState({ allPlacesData: filtered });
  };

  render() {
    return (
      <div className='main-page'>
        <h1 className='main-header'>Here you can see a list of interesting places..</h1>
        <button onClick={() => this.filterOneKind('city')} className='primary-btn mr-1'>
          Cities
        </button>
        <button onClick={() => this.filterOneKind('country')} className='primary-btn mr-1'>
          Countries
        </button>
        <button onClick={this.loadAllPlaces} className='primary-btn '>
          All Places
        </button>
        <div className='allPlaces'>
          {this.state.allPlacesData.map((place) => (
            <OnePlace key={place._id} onePlace={place} onDelete={this.handleDelete} />
          ))}
        </div>
      </div>
    );
  }
}

export default AllPlaces;

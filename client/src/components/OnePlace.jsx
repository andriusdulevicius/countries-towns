import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { editOnePlace } from '../service/fetchData';

class OnePlace extends Component {
  state = {
    editStatus: false,
    editedPlace: {
      _id: this.props.onePlace._id,
      title: this.props.onePlace.title,
      mainLand: this.props.onePlace.mainLand,
      population: this.props.onePlace.population,
      countryOrCity: this.props.onePlace.countryOrCity,
    },
  };

  handleChange = ({ target }) => {
    const editedPlaceCopy = { ...this.state.editedPlace };
    editedPlaceCopy[target.name] = target.value;
    this.setState({ editedPlace: editedPlaceCopy });
  };

  handleEdit = async (userId, newBody) => {
    await editOnePlace(userId, newBody);
    this.setState({ editStatus: false });
    toast.info('Place has been updated');
  };

  toggleEdit = () => {
    this.setState({ editStatus: !this.state.editStatus });
  };

  render() {
    const { onDelete } = this.props;
    const { _id, title, mainLand, population, countryOrCity } = this.state.editedPlace;

    return (
      <div className='onePlace'>
        {!this.state.editStatus ? (
          <div className='oneCard'>
            <h2>
              {countryOrCity === 'city' ? 'City:' : 'Country:'} {title}
            </h2>
            <h3>Main land: {mainLand}</h3>
            <h3>Population: {population}</h3>
            <div className='buttons'>
              <button className='edit-btn mr-1 secondary-btn' onClick={() => this.toggleEdit(_id)}>
                Edit
              </button>
              <button className='delete-btn secondary-btn' onClick={() => onDelete(_id)}>
                Delete
              </button>
            </div>
          </div>
        ) : (
          <div className='oneCard'>
            <h2>
              {countryOrCity === 'city' ? 'City:' : 'Country:'}
              <input type='text' value={title} onChange={this.handleChange} name='title' />
            </h2>
            <h3>
              Main land:
              <input type='text' value={mainLand} onChange={this.handleChange} name='mainLand' />
            </h3>
            <h3>
              Population:
              <input type='number' value={population} onChange={this.handleChange} name='population' />
            </h3>
            <div className='buttons'>
              <button
                className='save-btn mr-1 secondary-btn'
                onClick={() => this.handleEdit(_id, { title, mainLand, population, countryOrCity })}
              >
                Save
              </button>
              <button className='delete-btn secondary-btn' onClick={() => onDelete(_id)}>
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default OnePlace;

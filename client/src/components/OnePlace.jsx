import React, { Component } from 'react';

class OnePlace extends Component {
  state = {
    editedPlace: {
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

  render() {
    const { onDelete, onEdit } = this.props;
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
            <button
              className='edit-btn mr-1 secondary-btn'
              onClick={() => onEdit(_id, { title, mainLand, population, countryOrCity })}
            >
              Edit
            </button>
            <button className='delete-btn secondary-btn' onClick={() => onDelete(_id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default OnePlace;

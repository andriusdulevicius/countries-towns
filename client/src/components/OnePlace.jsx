import React, { Component } from 'react';

const { title, mainLand, population, countryOrCity } = this.rpops.onePlace;
class OnePlace extends Component {
  state = {
    editedPlace: {
      title: title,
      mainLand: mainLand,
      population: population,
      countryOrCity: countryOrCity,
    },
  };

  handleChange = ({ target }) => {
    const editedPlaceCopy = { ...this.state.editedPlace };
    editedPlaceCopy[target.name] = target.value;
    this.setState({ editedPlace: editedPlaceCopy });
  };

  render() {
    const { onDelete, onEdit } = this.props;
    const { _id } = this.props.onePlace;
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
              className='edit-btn mr-1'
              onClick={() => onEdit(_id, { title, mainLand, population, countryOrCity })}
            >
              Edit
            </button>
            <button className='delete-btn' onClick={() => onDelete(_id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default OnePlace;

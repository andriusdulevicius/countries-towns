import React, { Component } from 'react';
import { postNewPlace } from '../service/fetchData';

class AddNewPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFields: ['title', 'mainLand', 'population'],
      formData: {
        title: '',
        mainLand: '',
        population: 0,
        countryOrCity: '',
      },
    };
  }

  addNewPlace = (e) => {
    e.target.value = '';
    e.preventDefault();
    console.log('siunciam forma');
    console.log(this.state.formData);
    postNewPlace(this.state.formData, () => {
      console.log('New Place was created');
    });
  };

  handleChange = ({ target }) => {
    const formDataCopy = { ...this.state.formData };
    formDataCopy[target.name] = target.value;
    this.setState({ formData: formDataCopy });
  };
  render() {
    return (
      <div className='addNewForm'>
        <form onSubmit={this.addNewPlace} onChange={this.handleChange} className='create-user-form'>
          {this.state.inputFields.map((inputField) => (
            <div key={inputField} className='input-element'>
              <label htmlFor={inputField}>{inputField.toUpperCase()}:</label>
              <input
                type={inputField === 'population' ? 'number' : 'text'}
                placeholder={`Enter ${inputField}`}
                name={inputField}
                id={inputField}
              />
            </div>
          ))}
          <label htmlFor='countryOrCity'>PLEASE SELECT:</label>
          <select name='countryOrCity' id='countryOrCity'>
            <option></option>
            <option value='city'>City</option>
            <option value='country'>Country</option>
          </select>

          <button type='submit'>Create new Place</button>
        </form>
      </div>
    );
  }
}

export default AddNewPlace;

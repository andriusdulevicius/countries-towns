import React, { Component } from 'react';
import { toast } from 'react-toastify';
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
    e.preventDefault();
    const history = this.props.history;
    e.target.value = '';
    toast.success(`A new place has been created.`);
    postNewPlace(this.state.formData);
    history.push('/');
  };

  handleChange = ({ target }) => {
    const formDataCopy = { ...this.state.formData };
    formDataCopy[target.name] = target.value;
    this.setState({ formData: formDataCopy });
  };
  render() {
    return (
      <div className='addNewForm'>
        <h2>Add new place:</h2>
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
          <div className='select-container'>
            <label htmlFor='countryOrCity'>SELECT TYPE OF PLACE:</label>
            <select name='countryOrCity' id='countryOrCity'>
              <option></option>
              <option value='city'>City</option>
              <option value='country'>Country</option>
            </select>
          </div>

          <button className='primary-btn mr-auto' type='submit'>
            Create new Place
          </button>
        </form>
      </div>
    );
  }
}

export default AddNewPlace;

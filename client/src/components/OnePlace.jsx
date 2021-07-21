import React, { Component } from 'react';

class OnePlace extends Component {
  state = {};
  render() {
    return (
      <div className='onePlace'>
        <h2>One Place</h2>
        {this.props.onePlace.title}
      </div>
    );
  }
}

export default OnePlace;

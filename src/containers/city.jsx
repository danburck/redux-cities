import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions/index';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity },
    dispatch
  );
}

class City extends Component {
  handleClick = (event) => {
    this.props.setActiveCity(this.props.city);
  };

  render() {
    return (
      <li
        className="city list-group-item"
        role="button"
        onClick={this.handleClick} >
        {this.props.city.name}
      </li>
    );
  }
}


export default connect(null, mapDispatchToProps)(City);

import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    activeCity: state.active_city
  };
}

class ActiveCity extends Component {
  render() {
    const src = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`;

    return (
      <img src={src} alt="" className="active-city"/>
    );
  }
}

export default connect(mapStateToProps, null)(ActiveCity);

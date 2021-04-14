import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions/index';

import City from '../containers/city';

// wire action to the props of the component
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

// wire Redux state to the props of the component
function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

class CityList extends Component {
  render() {
    return (
      <ul className="cities">
        {this.props.cities.map((city) => {
          return <City
            city={city}
            key={city.slug} />;
        })}
      </ul>
    );
  }

  componentWillMount() {
    this.props.setCities();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);

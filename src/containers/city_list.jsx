import React, { Component } from 'react';

import City from '../containers/city';

class CityList extends Component {
  render() {
    return (
      <div className="cities">
        {this.props.cities.map((city) => {
          return <City
            city={city}
            key={city.slug} />;
        })}
      </div>
    );
  }
}

export default CityList;

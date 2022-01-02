import React, { Component } from 'react';
import City from './City'
import { connect } from 'react-redux';

export class CitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { cityList: [], name: '' };
  };

  componentDidMount() {
    const cities = [
      {id: 3, name: "Londres"},
      {id: 4, name: "Toronto"},
      {id: 2, name: "Singapur"},
    ];
    this.setState({
      cityList: cities
    });
  };

  passCityName =  ( name ) => {
    this.props.fetchDataClick(name)
  }

  render() {
    let cities = this.state.cityList;
    let filterLocation = this.props.filterLocation.trim().toLowerCase();
    if (filterLocation.length > 0) {
      cities = cities.filter(city =>
        city.name.toLowerCase().match( filterLocation )
      );
    };


    cities = cities.map((city, indx) => 
      <City key={indx}
        cityName = {city.name}
        handleClick={this.passCityName.bind(this, city.name)}
      />
    );

    return (
      <div style={{padding: "40px"}}>
        <ul>
          { cities }
        </ul>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(CitiesContainer);

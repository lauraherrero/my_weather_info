import React, { Component } from 'react';
import '../App.css';
import CitiesContainer from './CitiesContainer';
import OutputDisplay from './OutputDisplay';
import { connect } from 'react-redux';
import { changeLocation, fetchData } from '../actions/actions';
import Title from "./Title";
import ButtonTranslate from "./ButtonTranslate";

class WeatherApp extends Component {

  callFetchData = (name) => {
    this.fetchData(null, name)
  }

  fetchData = (e, location) => {
    if (e) {
      e.preventDefault();
    }

    let newLocation = this.props.location || location
    let encodedLocation = encodeURIComponent(newLocation);
    let urlPrefix = 'https://api.openweathermap.org/data/2.5/forecast?q=';
    let urlSuffix = '&APPID=e6cc0bc1e4c1de384f25114904d79a24&units=metric';
    let url = urlPrefix + encodedLocation + urlSuffix;
    this.props.dispatch(fetchData(url));
  };

  changeLocation = (event) => {
    this.props.dispatch(changeLocation(event.target.value));
  };

  render() {
    let currentTemp = 'Not Loaded Yet.';
    let currentMinTemp = 'Not Loaded Yet.';
    let currentMaxTemp = 'Not Loaded Yet.';
    let currentCond = 'Not Loaded Yet.';
    let icon;
    let city;
    let country;
    if (this.props.data.list) {
      currentTemp = Math.round(this.props.data.list[0].main.temp);
      currentMinTemp = this.props.data.list[0].main.temp_min;
      currentMaxTemp = this.props.data.list[0].main.temp_max;
      currentCond = this.props.data.list[1].weather[0].description;
      icon = this.props.data.list[0].weather[0].icon;
      city = this.props.data.city.name;
      country = this.props.data.city.country;
    } else {
      icon = "";
      city = "";
      country = "";
      currentTemp = "";
      currentMinTemp = "";
      currentMaxTemp = "";
    }
    return (
        <div className = "weatherApp hero" style={{textAlign: "center", height: "100vh"}}>
          <Title />
          <ButtonTranslate />
          <div>
            <CitiesContainer
              fetchDataClick= {this.callFetchData}
              filterLocation = { this.props.location }
            />
            <OutputDisplay
              city = { city }
              country = { country }
              tempOutput = { currentTemp }
              tempMinOutput = { currentMinTemp }
              tempMaxOutput = { currentMaxTemp }
              condOutput = { currentCond }
              iconOutput = { icon }
            />
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(WeatherApp);

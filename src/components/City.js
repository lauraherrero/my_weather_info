import React from 'react';

const City = (props) =>
  <div className = "cityList" >
    <li onClick={props.handleClick}>
      {props.cityName}
    </li>
  </div>

export default City;

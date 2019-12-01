import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './style.css';

const icons = {
  sun:'day-sunny',
  fog: 'day-fog',
  cloud: 'cloud',
  cloudy: 'cloudy',
  rain: 'rain',
  snow: 'snow',
  windy: 'windy'

}

const getWeatherIcon = (weatherState) =>{
  const icon = icons[weatherState];
  if (icon) {
    return <WeatherIcons name={icon} size="2x" />
  } else {
    return <WeatherIcons name="day-sunny" size="2x" />
  } 
}


const WeatherTemperature = ({temperature, weatherState}) => {
    return (
        <div className="weatherTemperatureCont">
          {getWeatherIcon(weatherState)}
          <span className="temperature">{temperature}</span>
          <span className="temperatureType">°C</span>
        </div>
      )
};

WeatherTemperature.propTypes = {
  temperature: PropTypes.number,
  weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;
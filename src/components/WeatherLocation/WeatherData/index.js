import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    SUN,
    FOG,
    CLOUD,
    CLOUDY,
    RAIN,
    SNOW,
    windy
} from '../../../constants/weathers';
import './style.css';

const WeatherData = () => (
    <div className="weatherDataCont">
        <WeatherTemperature temperature={30} weatherState={RAIN}/>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
    </div>
);

export default WeatherData;
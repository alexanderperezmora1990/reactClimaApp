import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {
    SUN,
    windy
} from '../../constants/weathers';
import { urlLocation } from '../../constants/api'
import convert from 'convert-units'
import './style.css'

const data = {
    temperature : 5,
    weatherState : SUN,
    humidity : 10,
    wind : "10 m/s"
}





class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city: 'Buenos aires',
            data: data
        }
    }


    getWeatherState = (weatherData) => {
        return windy
    }

    updateData = (weatherData) => {
        let {temp, humidity} =  weatherData.main;
        let { speed } = weatherData.wind
        this.getTemperature = temp;
        data.temperature = temp;
        const newData = {
            temperature : temp,
            weatherState :  this.getWeatherState(),
            humidity : humidity,
            wind : `${speed} m/s`
        }
        return newData;
    }

    theClick = () => {
        fetch(urlLocation).then(resolve => {
            return resolve.json();
        }).then( resolve => {
            let {name} = resolve;
            this.setState({
                city: name,
                data: this.updateData(resolve)
            });
        });
    }

    
    changeType = (e) => {
        const type = e.target.value;
        const {temperature} = this.state.data;
        let convertTemperature = (type === 'f') ? convert(temperature).from('C').to('F') : convert(temperature).from('F').to('C'); 
        this.setState({
            data: {
                temperature: convertTemperature.toFixed(2),
                weatherState :  this.state.data.weatherState,
                humidity : this.state.data.humidity,
                wind : this.state.data.wind
            }
        })
        
    }

    render() {
        const { city, data} = this.state;
        return (
            <div>
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={() => this.theClick()}>Realizar</button>
                <select className="drop-box" onChange={this.changeType}>
                    <option value="f">°F</option>
                    <option value="c">°C</option>
                </select>
            </div>
        );
    }
}


export default WeatherLocation;
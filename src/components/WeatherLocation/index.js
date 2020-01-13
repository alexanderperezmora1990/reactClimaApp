import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import updateData from '../../services/weather-service'
import { urlLocation } from '../../constants/api'
import convert from 'convert-units'
import './style.css'

const data = null;



class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city: 'Buenos aires',
            data: data
        }
    }

    
    componentDidMount() {
        this.theClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }


    theClick = () => {
        fetch(urlLocation).then(resolve => {
            return resolve.json();
        }).then( resolve => {
            let {name} = resolve;
            this.setState({
                city: name,
                data: updateData(resolve)
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
                { 
                    data ? <WeatherData data={data}></WeatherData> :
                    'Cargando data...'
                }
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
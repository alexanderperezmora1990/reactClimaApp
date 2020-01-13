import {
    SUN,
    windy
} from '../constants/weathers';


const data = {
    temperature : 5,
    weatherState : SUN,
    humidity : 10,
    wind : "10 m/s"
}


const getWeatherState = () => {
    return windy
}


const updateData = (weatherData) => {
    let {temp, humidity} =  weatherData.main;
    let { speed } = weatherData.wind
    data.temperature = temp;
    const newData = {
        temperature : temp,
        weatherState :  getWeatherState(),
        humidity : humidity,
        wind : `${speed} m/s`
    }
    return newData;
}

export default updateData;
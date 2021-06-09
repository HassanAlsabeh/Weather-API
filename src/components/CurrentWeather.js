import React from 'react';
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import "../App.css";
 

class CurrentWeather extends React.Component {

    constructor(props){
        super(props);
    }
 
   
    render(){
         const weatherData = this.props.data.main;  
         
        return(
 <div className="main-display">
              <img src={partlycloudy} alt="clear" width="250px"></img>
              <p>Overcast Clouds</p>
              <div className="main-1"><span>Temperature</span>	&nbsp; <div className="temp">{(weatherData.temp_min-273.15).toFixed(0)} &#176;</div> to &nbsp;<dev className="temp1">{(weatherData.temp_max-273.15).toFixed(0)}&#176; C</dev></div>
              <div className="main-1-1">
               <span>Humedity</span> <div className="humidity">{(weatherData.humidity).toFixed(0)} &#37;</div> <span>Pressure</span> <dev className="pressure">{(weatherData.pressure).toFixed(0)}</dev>
              </div>
            </div>
        );
    }
}

            export default CurrentWeather
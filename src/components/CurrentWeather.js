import React from 'react';
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import "../App.css";
 

class CurrentWeather extends React.Component {
    render(){
        return(
 <div className="main-display">
              <img src={partlycloudy} alt="clear" width="250px"></img>
              <p>Overcast Clouds</p>
              <div className="main-1"><span>Temperature</span>	&nbsp; <div className="temp">10 &#176;</div> to &nbsp;<dev className="temp1">11 &#176; C</dev></div>
              <div className="main-1-1">
               <span>Humedity</span> 	&nbsp; <div className="humidity">78 &#37;</div> <span>Pressure</span> &nbsp;<dev className="humidity1">100848</dev>
              </div>
            </div>
        );
    }
}

            export default CurrentWeather
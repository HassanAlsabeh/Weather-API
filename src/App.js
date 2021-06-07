import React, { Component } from "react";
import Search from "./components/Search";
import clear from "./img/weather-icons/clear.svg"
import partlycloudy from "./img/weather-icons/partlycloudy.svg"
import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Hassan"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <div className="main">
            <div className="search">
              <Search/>
            </div>
            <div className="main-display">
              <img src={partlycloudy} alt="clear" width="250px"></img>
              <p>Overcast Clouds</p>
              <div className="main-1"><span>Temperature</span>	&nbsp; <div className="temp">10 &#176;</div> to &nbsp;<dev className="temp1">11 &#176; C</dev></div>
              <div className="main-1-1">
               <span>Humedity</span> 	&nbsp; <div className="humidity">78 &#37;</div> <span>Pressure</span> &nbsp;<dev className="humidity1">100848</dev>
              </div>
            </div>
            <div className="main-2">
              <div className="main-2-1">
                <p>03:00</p>
                <div className="logo">
                 <img src={partlycloudy} alt="clear" width="100px" height="100px"></img>
                </div>
                <p>8 &#176; C</p>
              </div>
              <div className="main-2-1">
                <p>06:00</p>
                <div className="logo">
                 <img src={partlycloudy } alt="clear" width="100px" height="100px"></img>
                </div>
                <p>9 &#176; C</p>
              </div>
              <div className="main-2-1">
                <p>09:00</p>
                <div className="logo">
                    <img src={clear} alt="clear" width="100px" height="100px"></img>
                </div>
                <p>14 &#176; C</p>
              </div>
              <div className="main-2-1">
                <p>12:00</p>
                <div className="logo">
                      <img src={clear} alt="clear" width="100px" height="100px"></img>
                </div>
                <p>17 &#176; C</p>
              </div>
              <div className="main-2-1">
                <p>15:00</p>
                <div className="logo">
                    <img src={clear} alt="clear" width="100px" height="100px"></img>
                </div>
                <p>18 &#176; C</p>
              </div>
              <div className="main-2-1">
                <p>18:00</p>
                <div className="logo">
                    <img src={clear} alt="clear" width="100px" height="100px"></img>
                </div>
                <p>16 &#176; C</p>
              </div>
              <div className="main-2-1">
                <p>21:00</p>
                <div className="logo">
                     <img src={partlycloudy } alt="clear" width="100px" height="100px"></img>
                </div>
                <p>13 &#176; C</p>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Search from "./components/Search";

import partlycloudy from "./img/weather-icons/partlycloudy.svg"
import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Upcomings from "./components/Upcomings";

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
           <div>
             <CurrentWeather/>
             <Upcomings/>
           </div>
            
        </div>
      </div>
    );
  }
}

export default App;

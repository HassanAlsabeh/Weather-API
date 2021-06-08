import React, { Component } from "react";
import Search from "./components/Search";
import fakeWeatherData from "./data/FakeWeather.json";

import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Upcoming from "./components/Upcoming";

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
             <Upcoming/>
           </div>
            
        </div>
      </div>
    );
  }
}

export default App;

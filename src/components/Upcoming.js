import React from 'react';
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import "../App.css";





const Upcoming = (props) =>{

  return(

        <div className="main-2">
              <div className="main-2-1">
                <p>03:00</p>
                <div className="logo">
                 <img src={partlycloudy} alt="clear" width="100px" height="100px"></img>
                </div>
                <p>{props.temp_1}&#176; C</p>
              </div>
              <div className="main-2-1">
                <p>06:00</p>
                <div className="logo">
                 <img src={partlycloudy } alt="clear" width="100px" height="100px"></img>
                </div>
                <p>{props.temp_2} &#176; C</p>
              </div>
              <div className="main-2-1">
                <p>09:00</p>
                <div className="logo">
                    <img src={clear} alt="clear" width="100px" height="100px"></img>
                </div>
                <p>{props.temp_3} &#176; C</p>
              </div>
              <div className="main-2-1">
                <p>12:00</p>
                <div className="logo">
                      <img src={clear} alt="clear" width="100px" height="100px"></img>
                </div>
                <p>{props.temp_4} &#176; C</p>
              </div>
              <div className="main-2-1">
                <p>15:00</p>
                <div className="logo">
                    <img src={clear} alt="clear" width="100px" height="100px"></img>
                </div>
                <p>{props.temp_5} &#176; C</p>
              </div>
              <div className="main-2-1">
                <p>18:00</p>
                <div className="logo">
                    <img src={clear} alt="clear" width="100px" height="100px"></img>
                </div>
                <p>{props.temp_6} &#176; C</p>
              </div>
              <div className="main-2-1">
                <p>21:00</p>
                <div className="logo">
                     <img src={partlycloudy } alt="clear" width="100px" height="100px"></img>
                </div>
                <p>{props.temp_7} &#176; C</p>
              </div>
            </div>
        )
    }


      
        
export default Upcoming
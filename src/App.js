import React, { Component } from 'react';
import './App.css';
import $ from 'jquery'; // jquery.

import { WeatherDisplay } from './Components/Body/WeatherDisplay'
import { LoadingScreen } from './Components/Screen/LoadingScreen'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        location: {
            city: 'LONDON',
            date: 'SATURDAY, 01 FEB 2019',
            altitude: 130
        },
        weather: {
            temperature: 75,
            wind: 18,
            humidity: 78,
            clouds: 100
        },
        daylight: {
            first: '06:00 AM',
            last: '21:00 PM'
        },
        screen: 'loading',
        error: ''
    };
    this.loadLocation('London');
  }

  loadLocation = (location) => {

    var url = "http://api.openweathermap.org/data/2.5/weather?q="+location+"&units=metric&APPID=602176be6e70af936a462534053985a7";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.handleResponse,
			error : this.showError
		});
  };

  changeLocation = () => {
    /*alert('Change location.');
    this.setState({location: {
        city: 'SAINTSBURRIES',
        date: 'SATURDAY, 03 FEB 2020',
        altitude: 0
    },
    weather: {
        temperature: -1,
        wind: 900,
        humidity: 900,
        clouds: 900
    },
    daylight: {
        first: '20:00 AM',
        last: '20:05 PM'
    }});*/
    this.setState({
      screen: 'location'
    });
  }

  render() {
    return (
      <div className="App">
        {
        this.state.screen === 'weather' ?
          <WeatherDisplay state={this.state} changeLocationAction={this.changeLocation}></WeatherDisplay> :
          (
            this.state.screen === 'location' ? 
              <h1>Location</h1>:
              <LoadingScreen></LoadingScreen>
          )
        }
      </div>
    );
  }

  handleResponse = (json) => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    this.setState({
      weather: {
        temperature: Math.round(json.main.temp),
        humidity: json.main.humidity,
        wind: json.wind.speed,
        clouds: json.clouds.all,
      },
      daylight: {
        first: this.getTimeFromUnix(json.sys.sunrise),
        last: this.getTimeFromUnix(json.sys.sunset)
      },
      location:{
          city: json.name,
          altitude: 130,
          date: new Date().toLocaleDateString('en-GB', options)
      },
      screen: 'weather'
    });
  }

  showError = () => {
    this.setState({
      screen: 'location',
      error: 'Could not find location.'
    })
  }

  getTimeFromUnix = (timestamp) => {
      var date = new Date(timestamp*1000);
      return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
      //return date.getHours() + ':' + date.getMinutes();
  }
}

export default App;

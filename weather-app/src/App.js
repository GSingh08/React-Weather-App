import React from 'react';

import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "28c08c68b34cdd9b00ef4e021455b972";

class App extends React.Component {
  getWeather = async (e) => {
      //prevents it from refreshing
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

      const data = await api_call.json();
      console.log(data);
  }
  render() {
    return (
      <div>
        <Titles /> 
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
};

export default App;

class UI {
  constructor() {
    this.location = document.getElementById('location');
    this.icon_url = document.getElementById('icon_url');
    this.temp = document.getElementById('temp');
    this.feel = document.getElementById('feel');
    this.weather = document.getElementById('weather');
    this.wind_string = document.getElementById('wind_string');
    this.relative_humidity = document.getElementById('relative_humidity');
    this.pressure_in = document.getElementById('pressure_in');
    this.wind_mph = document.getElementById('wind_mph');
    this.dewpoint_f = document.getElementById('dewpoint_f');

  }

  updateWeather (data) {
    
    this.location.innerText = data.display_location.full;
    this.icon_url.src = data.icon_url;
    this.temp.innerText = data.temp_f;
    this.feel.innerText = `RealFeel® ${data.feelslike_string}`
    this.weather.innerText = data.weather;
    this.wind_string.innerText = data.wind_string;
    this.relative_humidity.innerText = `Humidity: ${data.relative_humidity}`;
    this.pressure_in.innerText = `Pressure: ${data.pressure_in}`;
    this.wind_mph.innerText = `Wind: ${data.wind_mph} MPH`;
    this.dewpoint_f.innerHTML = `Dew Point: ${data.dewpoint_f}`;
  }

  getInput () {
   const city = document.getElementById('city').value,
         state = document.getElementById('state').value;
   return {
     city,
     state
   }      

  }
  clearInput () {
    document.getElementById('city').value = '';
    document.getElementById('state').value = '';
  }
}
export const ui = new UI();
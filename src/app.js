import { ui } from './UI';
import { weather } from './Weather';

// DOM event listner

document.addEventListener('DOMContentLoaded', getWeather);
function getWeather() {
  // Get JSON fron uw
 weather.getWeather()
 .then(data => {
  // Update UI
  ui.updateWeather(data);
 })
  
};

// Location event listner

document.getElementById('w-change-btn').addEventListener('click', updateLocation);
function updateLocation() {
  const input = ui.getInput();
  if (input.city !== '' & input.state !== '') {
    weather.updateLocation(input);
    // clear Input
    ui.clearInput();
    // Close modal
    $('#locModal').modal('hide');
    // Reload windows 
    getWeather();
    
  }
};
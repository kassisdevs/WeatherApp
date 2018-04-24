class Weather {
constructor() {
  this.state = 'TX';
  this.city = 'Austin';
  this.key = '4d534d8cc74f723a';
  this.url = `http://api.wunderground.com/api/${this.key}/conditions/q/${this.state}/${this.city}.json
  `;
}
async getWeather(){
  const response = await fetch(this.url);
  const responseData = await response.json();
  return responseData.current_observation;
}
updateLocation (data) {
  this.city = data.city;
  this.state = data.state;
  this.url = `http://api.wunderground.com/api/${this.key}/conditions/q/${this.state}/${this.city}.json
  `;
}
dataLog () {
  console.log(this.state, this.city);
}
}
export const weather = new Weather();
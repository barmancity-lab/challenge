module.exports = {
  check_weather: {
    endpoint: 'https://api.openweathermap.org/data/2.5',
    timeout: 5000,
    key: '12c0fbb483ca3872c18f849d587299f9',
    services: ['weather', 'forecast']
  },
  location_service: {
    endpoint: 'http://ip-api.com/json',
    timeout: 5000
  },
  country: 'AR',
};

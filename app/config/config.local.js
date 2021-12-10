module.exports = {
  check_weather: {
    endpoint: process.env.NODE_CHECK_WEATHER_ENDPOINT,
    timeout: process.env.NODE_CHECK_WEATHER_TIMEOUT,
    key: process.env.NODE_CHECK_WEATHER_KEY,
    services: (process.env.NODE_CHECK_SERVICES || 'weather,forecast').split(',')
  },
  location_service: {
    endpoint: process.env.NODE_CHECK_LOCATION_ENDPOINT,
    timeout: process.env.NODE_CHECK_LOCATION_TIMEOUT
  },
  country: process.env.COUNTRY,
};


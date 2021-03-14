const config = require('../config/index').config;
const rest = require('../services/rest-comunication');
const LocationService = require('../services/get-location');

const {
  setResponseWithOk,
  setResponseWithError
} = require('../util/common-response');

module.exports = function CheckWeatherController() {
  this.location = new LocationService();
  this.call = async (req) => {
    // eslint-disable-next-line
    
    const route = req.route.path;
    const condition = route.includes('current');

    const configW = config.check_weather;
    const uriParam = condition ? configW.services[0] : configW.services[1];

    const { params } = req;
    const location = (typeof params.city === 'undefined') ? await this.location.get() : params.city;

    const request = `?q=${location}`;
    // eslint-disable-next-line
    const uri = `${configW.endpoint}/${uriParam}${request}&APPID=${configW.key}`;
    // eslint-disable-next-line 
    const timeout = uri;
    const result = await rest.rq('GET', uri, timeout);

    return result;
  };

  this.resolve = async (req, res) => {
    try {
      const response = await this.call(req);
      return setResponseWithOk(res, 200, response.body, 200);
    } catch (err) {
      return setResponseWithError(res, 500, err.message);
    }
  };
};

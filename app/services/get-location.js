const rest = require('../services/rest-comunication');
const getIP = require('external-ip')();
const config = require('../config/index').config;


function Location() {
  this.get = async () => {
    const ip = await this.getExternalIp();
    const uri = `${config.location_service.endpoint}/${ip}`;
    const result = await rest.rq('GET', uri, 5000);
    return result.body.city;
  };

  this.getExternalIp = async () => {
    // eslint-disable-next-line
    let ipe = ''; 
    getIP((err, ip) => {
      if (err) {
        throw err;
      }
      ipe = ip;
    });
    return ipe;
  };
}
module.exports = Location;

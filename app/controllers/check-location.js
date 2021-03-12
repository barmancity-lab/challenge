const LocationService = require('../services/get-location');

const {
  setResponseWithOk,
  setResponseWithError
} = require('../util/common-response');

module.exports = function CustomerController() {
  this.location = new LocationService();
  this.call = async () => {
    // eslint-disable-next-line
    const result = await this.location.get();
    return result;
  };

  this.get = async (req, res) => {
    try {
      const response = await this.call();
      return setResponseWithOk(res, 200, response, 200);
    } catch (err) {
      return setResponseWithError(res, 500, err.message);
    }
  };
};

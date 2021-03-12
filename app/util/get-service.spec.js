const chai = require('chai');

const expect = chai.expect;
const getService = require('./get-service');

describe('Get Services Util', () => {
  const config = {
    service_name: 'test_service_name',
    endpoint: 'test_service_endpoint'
  };
  it('should return service object with overrided config', async (done) => {
    const compendiumInstance = new (function () {
      this.create = (service, overridedOptions) => {
        expect(overridedOptions).to.be.a('object');
        done();
      };
    })();
    await getService(10, config, compendiumInstance);
  });
});

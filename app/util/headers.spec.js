const mockery = require('mockery');
const chai = require('chai');

const expect = chai.expect;

describe('headers', () => {
  beforeEach(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
  });

  afterEach(() => {
    mockery.disable();
    mockery.deregisterAll();
  });

  describe('getLegacy headers', () => {
    it('should have the same number of fields', () => {
      const headers = require('./headers').getLegacy();
      expect(headers).to.have.property('mdw-cs-country');
      expect(headers).to.have.property('mdw-cs-commerce');
      expect(headers).to.have.property('mdw-cs-channel');
    });
  });
});

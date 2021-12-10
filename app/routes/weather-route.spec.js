const mockery = require('mockery');
const chai = require('chai');
const sinon = require('sinon');

const expect = chai.expect;

const baseSpec = require('../base.spec');
baseSpec('customerRoute', () => {
  describe('customerRoute', () => {
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

    describe('checking the actions', () => {
      it('should allow calls by using POST, GET', () => {
        const actionsMock = {
          post(path, middleware) {},
          get(path, middlewares) {}
        };
        const getSpy = sinon.spy(actionsMock, 'get');
        const postSpy = sinon.spy(actionsMock, 'post');

        const expressMock = {
          Router() {
            return actionsMock;
          }
        };
        mockery.registerMock('express', expressMock);
        mockery.registerMock('../config', {
          context: {
            middlewares: {
              commons: ['middleware'],
              createCustomer: ['middleware']
            }
          }
        });

        const getMiddlewaresMock = function (middlewares) {
          return middlewares;
        };

        require('./weather-route');

        expect(getSpy.called).to.be.true;
        expect(getSpy.args[0][0]).to.be.equal('/forecast');
        expect(getSpy.called).to.be.true;
        expect(getSpy.args[1][0]).to.be.equal('/forecast/:city');
        expect(getSpy.called).to.be.true;
        expect(getSpy.args[2][0]).to.be.equal('/current');
        expect(getSpy.called).to.be.true;
        expect(getSpy.args[3][0]).to.be.equal('/current/:city');
        expect(getSpy.called).to.be.true;
        expect(getSpy.args[4][0]).to.be.equal('/location');
      });
    });
  });
});
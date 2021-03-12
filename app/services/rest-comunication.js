const rp = require('request-promise');

module.exports.rq = (method, uri, timeout, headers = null, body = null) =>
new Promise(resolve =>
    rp({
      method,
      uri,
      timeout,
      headers,
      body,
      json: true,
      resolveWithFullResponse: true
    })
      .then(result => resolve(result))
      .catch(result => resolve(result))
  );

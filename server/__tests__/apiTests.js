const request = require('supertest');
const server = require('../index.js');

module.exports = {
  runAll() {
    module.exports.testSummaryRoute();
  },

  testSummaryRoute() {
    request(server)
      .get('/2/impression')
      .expect(200)
      .expect((res) => {
        const actual = typeof res.body[0].location;
        if (actual === 'string') {
          console.log('Success: Body property "location" is of type "string"');
          return true;
        }
        console.log(`Failure: Expected "string" to equal ${actual}`);
        return false;
      })
      .end((err, res) => {
        if (err) {
          console.log(res);
          server.close();
        } else {
          server.close();
        }
      });
  }
};

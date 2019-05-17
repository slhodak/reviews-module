const { Client } = require('pg');
const squel = require('squel');

const client = new Client({
  user: 'macuser',
  host: 'localhost',
  database: 'reviews',
  port: 5432
});

module.exports.getAllReviews = function(restaurantId, callback) {
  client.connect();
  let sql = squel.select()
    .from('restaurants')
    .where(`id = ${restaurantId}`)
    .toString();
  client.query(sql)
    .then(res => {
      callback(null, res.rows);
      client.end();
    })
    .catch(err => {
      callback(err);
      client.end();
    });
};

module.exports.client = client;
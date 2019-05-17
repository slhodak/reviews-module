const { Client } = require('pg');
const squel = require('squel');

let client = new Client({
  user: 'macuser',
  host: 'localhost',
  database: 'reviews',
  port: 5432
});

module.exports.getAllReviews = function(restaurantId, callback) {
  client = new Client({
    user: 'macuser',
    host: 'localhost',
    database: 'reviews',
    port: 5432
  });
  
  let sql = squel.select()
    .from('reviews')
    .where(`restaurant = ${restaurantId}`)
    .toString();

  client.connect()
    .then(() => {
      client.query(sql)
        .then(res => {
          callback(null, res.rows);
          client.end();
        })
        .catch(err => {
          callback(err);
          client.end();
        });
    })
    .catch(err => {
      callback(err);
      client.end();
    });
};

module.exports.client = client;
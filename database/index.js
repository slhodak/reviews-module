const { Client } = require('pg');
const squel = require('squel');

module.exports.getAllReviews = function(restaurantId, callback) {
  let client = new Client({
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
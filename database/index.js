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

module.exports.getImpression = function(restaurantId, callback) {
  // get restaurant impression info from restaurant table
  let client = new Client({
    user: 'macuser',
    host: 'localhost',
    database: 'reviews',
    port: 5432
  });
  let sql = squel.select()
    .from('restaurants')
    .field('restaurants.location')
    .field('restaurants.noise')
    .field('restaurants.recommendpercent', 'recommendPercent')
    .field('restaurants.valuerating', 'valueRating')
    .field('restaurants.averageoverall', 'averageOverall')
    .field('restaurants.averagefood', 'averageFood')
    .field('restaurants.averageambience', 'averageAmbience')
    .field('restaurants.averageservice', 'averageService')
    .where(`id = ${restaurantId}`)
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
const { Client } = require('pg');
const squel = require('squel');
const localRole = require('../config/localRole.js');


const makeQuery = (client, sql, callback) => {
  client.connect()
    .then(() => {
      client.query(sql)
        .then((res) => {
          callback(null, res.rows);
          client.end();
        })
        .catch((err) => {
          callback(err);
          client.end();
        });
    })
    .catch((err) => {
      callback(err);
      client.end();
    });
};

module.exports.getAllReviews = (restaurantId, callback) => {
  const client = new Client({
    user: localRole,
    host: 'localhost',
    database: 'reviews',
    port: 5432
  });

  const sql = squel.select()
    .from('reviews')
    .where(`restaurant = ${restaurantId}`)
    .toString();

  makeQuery(client, sql, callback);
};

//  should get relevant diner data for each review and bundle it in a composite object...
//    but that would produce duplicate diner data? so?
//    just get all diners who reviewed the restaurant
//    join? get all diner ids and query each? hell no, join.
module.exports.getAllDinersWhoReviewed = (restaurantId, callback) => {
  const client = new Client({
    user: localRole,
    host: 'localhost',
    database: 'reviews',
    port: 5432
  });

  const sql = `SELECT * from reviews INNER JOIN diners on (reviews.diner = diners.id) where reviews.restaurant = ${restaurantId}`;

  makeQuery(client, sql, callback);
};

module.exports.getImpression = (restaurantId, callback) => {
  // get restaurant impression info from restaurant table
  const client = new Client({
    user: localRole,
    host: 'localhost',
    database: 'reviews',
    port: 5432
  });
  const sql = squel.select()
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

  makeQuery(client, sql, callback);
};

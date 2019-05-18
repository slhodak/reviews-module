const Faker = require('faker');
const db = require('./index.js');
const { Client } = require('pg');
const squel = require('squel');
const moment = require('moment');
const localRole = require('../config/localRole.js');

const Seed = {
  foodWords: ['pot roast', 'chicken', 'sushi', 'marshmallows', 'pumpkin pie', 'wine'],
  tagWords: ['groups', 'kids', 'gluten free', 'vegan'],
  noiseLevels: ['Quiet', 'Average', 'Loud'],
  getRandomFoodWord: function() {
    return Seed.foodWords[Math.floor(Math.random() * Seed.foodWords.length)];
  },
  getRandomTagWord: function() {
    return Seed.tagWords[Math.floor(Math.random() * Seed.tagWords.length)];
  },
  getRandomNoiseLevel: function() {
    return Seed.noiseLevels[Math.floor(Math.random() * Seed.noiseLevels.length)];
  },
  all: function() {
    let restaurants = Seed.createRestaurants();
    let diners = Seed.createDiners();
    let reviews = Seed.createReviews();
    let client = new Client({
      user: localRole,
      host: 'localhost',
      database: 'reviews',
      port: 5432
    });
    client.connect();
    Seed.insertRestaurants(restaurants, (err, res) => {
      console.log('inserting restaurants...');
      if (err) {
        console.log(err);
        client.end();
      } else {
        Seed.insertDiners(diners, (err, res) => {
          console.log('inserting diners...');
          if (err) {
            console.log(err);
            client.end();
          } else {
            Seed.insertReviews(reviews, (err, res) => {
              console.log('inserting reviews...');
              if (err) {
                console.log(err);
              }
              client.end();
            });
          }
        });
      }
    });
  },
  createRestaurants: function() {
    //  create 5 restaurants
    let restaurants = [];
    for (var i = 0; i < 5; i++) {
      var restaurant = {};
      restaurant.name = Faker.lorem.word();
      restaurant.location = Faker.address.city().replace(/\'/g, '');
      restaurant.noise = Seed.getRandomNoiseLevel();
      restaurant.location = Faker.address.city().replace(/\'/g, '');
      restaurant.averageoverall = Faker.random.number({min: 0, max: 5, precision: 0.1});
      restaurant.averageservice = Faker.random.number({min: 0, max: 5, precision: 0.1});
      restaurant.averageambience = Faker.random.number({min: 0, max: 5, precision: 0.1});
      restaurant.averagefood = Faker.random.number({min: 0, max: 5, precision: 0.1});
      restaurant.valuerating = Faker.random.number({min: 0, max: 5, precision: 0.1});
      restaurant.recommendpercent = Faker.random.number({min: 0, max: 100});
      restaurants.push(restaurant);
    }
    return restaurants;
  },
  createDiners: function() {
    //  create 50 diners
    let diners = [];
    for (var i = 0; i < 50; i++) {
      var diner = {};
      diner.firstname = Faker.name.firstName().replace(/\'/g, '');
      diner.lastname = Faker.name.lastName().replace(/\'/g, '');
      diner.city = Faker.address.city().replace(/\'/g, '');
      diner.totalreviews = Faker.random.number({min: 0, max: 25});
      diners.push(diner);
    }
    return diners;
  },
  createReviews: function() {
    //  create 100 reviews
    let reviews = [];
    for (var i = 0; i < 100; i++) {
      var review = {};
      review.restaurant = Faker.random.number({min: 1, max: 5});
      review.diner = Faker.random.number({min: 1, max: 50});
      review.text = Faker.lorem.sentences();
      review.date = moment().format('YYYY-MM-DD', Faker.date.recent());
      review.overall = Faker.random.number({min: 0, max: 5});
      review.food = Faker.random.number({min: 0, max: 5});
      review.service = Faker.random.number({min: 0, max: 5});
      review.ambience = Faker.random.number({min: 0, max: 5});
      review.wouldrecommend = Faker.random.boolean();
      review.tags = '';
      for (var j = 0; j < 2; j++) {
        if (Math.random() > 0.8) {
          if (review.tags.split(',').length > 0) {
            reviews.tags += ',';
          }
          review.tags += Seed.getRandomFoodWord();
          if (Math.random() > 0.9) {
            review.tags += ',' + Seed.getRandomTagWord();
          }
        }
      }
      reviews.push(review);
    }
    return reviews;
  },
  insertRestaurants: function(restaurants, callback) {
    //  insert 5 restaurants
    let client = new Client({
      user: localRole,
      host: 'localhost',
      database: 'reviews',
      port: 5432
    });
    let sql = squel.insert()
      .into('restaurants')
      .setFieldsRows(restaurants)
      .toString();
    client.connect();
    client.query(sql, (err, res) => {
      if (err) {
        callback(err.stack);
        client.end();
      } else {
        callback(null, res.rows[0]);
        client.end();
      }
    });
  },
  insertDiners: function(diners, callback) {
    //  insert 50 diners 
    let client = new Client({
      user: localRole,
      host: 'localhost',
      database: 'reviews',
      port: 5432
    });
    let sql = squel.insert()
      .into('diners')
      .setFieldsRows(diners)
      .toString();
    client.connect();
    client.query(sql, (err, res) => {
      if (err) {
        callback(err.stack);
        client.end();
      } else {
        callback(null, res.rows[0]);
        client.end();
      }
    });
  },
  insertReviews: function(reviews, callback) {
    //  insert 100 reviews
    const client = new Client({
      user: localRole,
      host: 'localhost',
      database: 'reviews',
      port: 5432
    });
    let sql = squel.insert()
      .into('reviews')
      .setFieldsRows(reviews)
      .toString();
    client.connect();
    client.query(sql, (err, res) => {
      if (err) {
        callback(err.stack);
        client.end();
      } else {
        callback(null, res.rows[0]);
        client.end();
      }
    });
  }
};

Seed.all();
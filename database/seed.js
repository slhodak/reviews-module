const Faker = require('faker');
const db = require('./index.js');
const { Client } = require('pg');
const squel = require('squel');

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
      user: 'macuser',
      host: 'localhost',
      database: 'reviews',
      port: 5432
    });
    client.connect();
    Seed.insertRestaurants(restaurants, (err, res) => {
      if (err) {
        console.log(err);
        client.end();
      } else {
        Seed.insertDiners(diners, (err, res) => {
          if (err) {
            console.log(err);
            client.end();
          } else {
            Seed.insertReviews(reviews, (err, res) => {
              if (err) {
                console.log(err);
                client.end();
              } else {
                Seed.insertImpressions(restaurants, (err, res) => {
                  if (err) {
                    console.log(err);
                    client.end();
                  } else {
                    client.end();
                  }
                });
              }
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
      review.date = Faker.random.number({min: 1, max: 31});
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
  createImpression: function(impressionData) {
    let impression = {};
    // take each food, service, ambience, and overall rating and calculate an average
    // also get a percent from the total and 
    let totals = {};
    let wouldRecommendCount = 0;
    impressionData.forEach(ratingSet => {
      for (var rating in ratingSet) {
        if (typeof rating !== boolean) {
          totals[rating] += rating;
        } else if (rating === true) {
          wouldRecommendCount++;
        }
      }
    });
    impression['recommendpercent'] = wouldRecommendCount / impressionData.length * 100;
    for (var total in totals) {
      if (total === 'overall') {
        impression['averageoverall'] = totals[total] / impressionData.length;
      } else if (total === 'food') {
        impression['averagefood'] = totals[total] / impressionData.length;
      } else if (total === 'service') {
        impression['averageservice'] = totals[total] / impressionData.length;
      } else if (total === 'ambience') {
        impression['averageambience'] = totals[total] / impressionData.length;
      }
    }
    return impression;
  },
  insertRestaurants: function(restaurants, callback) {
    //  insert 5 restaurants
    let client = new Client({
      user: 'macuser',
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
      user: 'macuser',
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
        client.end()
      }
    });
  },
  insertReviews: function(reviews, callback) {
    //  insert 100 reviews
    const client = new Client({
      user: 'macuser',
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
  },
  insertImpressions: function(restaurants, callback, id = 0) {
    console.log('inserting impressions');
    // insert 5 impressions sets 
    // use each restaurant id to get all data for each restaurant
    let client = new Client({
      user: 'macuser',
      host: 'localhost',
      database: 'reviews',
      port: 5432
    });
    let sql = squel.select()
      .from('reviews')
      .field('reviews.overall')
      .field('reviews.food')
      .field('reviews.service')
      .field('reviews.ambience')
      .field('reviews.wouldrecommend')
      .where(`reviews.restaurant = ${id}`)
      .toString();
    client.connect();
    client.query(sql, (err, res) => {
      if (err) {
        callback(err.stack)
        client.end();
      } else if (id < restaurants.length) {
        // use that data to calculate impression for each restaurant
        let impression = Seed.createImpression(res.rows[0]);
        sql = squel.insert()
          .into('restaurants')
          .setFields(impression)
          .where(`id = ${id}`)
          .toString();
        client.query(sql, (err, res) => {
          if (err) {
            callback(err);
            client.end();
          } else {
            client.end();
            Seed.insertImpressions(restaurants, callback, id + 1);
          }
        });
      }
      client.end();
    });
  }
};

Seed.all();
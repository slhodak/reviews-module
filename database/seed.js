const Faker = require('faker');
const knex = require('./index.js').knex;
const _ = require('lodash');
const Promise = require('bluebird');

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
    Seed.insertRestaurants(restaurants);
    let diners = Seed.createDiners();
    Seed.insertDiners(diners);
    let reviews = Seed.createReviews();
    Seed.insertReviews(reviews);
  },
  createRestaurants: function() {
    //  create 5 restaurants
    let restaurants = [];
    for (var i = 0; i < 5; i++) {
      var restaurant = {};
      restaurant.name = Faker.lorem.word();
      restaurant.location = Faker.address.city();
      restaurant.noise = Seed.getRandomNoiseLevel();
      restaurant.recommendpercent = Faker.random.number(100);
      restaurant.valuerating = Faker.random.number({min: 0, max: 5, precision: 0.1});
      restaurant.averageoverall = Faker.random.number({min: 0, max: 5, precision: 0.1});
      restaurants.push(restaurant);
    }
    return restaurants;
  },
  createDiners: function() {
    //  create 50 diners
    let diners = [];
    for (var i = 0; i < 50; i++) {
      var diner = {};
      diner.firstname = Faker.name.firstName();
      diner.lastname = Faker.name.lastName();
      diner.city = Faker.address.city();
      diner.totalreviews = Faker.random.number({min: 0, max:25});
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
      review.date = Faker.date.recent();
      review.overall = Faker.random.number({min: 0, max: 5});
      review.food = Faker.random.number({min: 0, max: 5});
      review.service = Faker.random.number({min: 0, max: 5});
      review.ambience = Faker.random.number({min: 0, max: 5});
      review.wouldrecommend = Faker.random.boolean();
      review.tags = '';
      for (var j = 0; j < 2; j++) {
        if (Math.random > 0.8) {
          if (reviews.tags.split(',').length > 0) {
            reviews.tags += ',';
          }
          reviews.tags += Seed.getRandomFoodWord();
          if (Math.random > 0.9) {
            reviews.tags += ',' + Seed.getRandomTagWord();
          }
        }
      }
      reviews.push(review);
    }
    return reviews;
  },
  insertRestaurants: function(restaurants) {
    //  insert 5 restaurants
    restaurants.forEach(restaurant => {
      console.log(restaurant);
      knex('restaurants').insert(restaurant)
        .then(result => {
          console.log(result);
        });
    });
  },
  insertDiners: function(diners) {
    //  insert 50 diners 
    diners.forEach(diner => {
      knex('diners').insert(diner);
    });
  },
  insertReviews: function(reviews) {
    //  insert 100 reviews
    reviews.forEach(review => {
      // console.log(review);
      knex('reviews').insert(review);
    });
  }
};

Seed.all();
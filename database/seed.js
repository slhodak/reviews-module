const faker = require('faker');

const Seed = {
  all: function() {
    let restaurants = Seed.createRestaurants();
    Seed.insertRestaurants(restaurants);
    let diners = Seed.createDiners();
    Seed.insertDiners(diners);
    let reviews = Seed.createReviews();
    Seed.insertReviews(reviews);
    let impressions = Seed.createImpressions();
    Seed.insertImpressions(impressions);
  },
  createRestaurants: function() {
    //  create 5 restaurants 
  },
  createDiners: function() {
    //  create 50 diners 
  },
  createReviews: function() {
    //  create 100 reviews
  },
  createImpressions: function() {
    //  create impressions info based on reviews data for the same number as existing restaurants
  },
  insertRestaurants: function() {
    //  insert 5 restaurants 
  },
  insertDiners: function() {
    //  insert 50 diners 
  },
  insertReviews: function() {
    //  insert 100 reviews
  },
  insertImpressions: function() {
    //  insert impressions info
  }
};

export default Seed;
const Faker = require('faker');

const Seed = {
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
      diner.totalReviews = Faker.random.number(0, 25);
      diners.push(diner);
    }
    return diners;
  },
  createReviews: function() {
    //  create 100 reviews
  },
  insertRestaurants: function() {
    //  insert 5 restaurants 
  },
  insertDiners: function() {
    //  insert 50 diners 
  },
  insertReviews: function() {
    //  insert 100 reviews
  }
};

export default Seed;
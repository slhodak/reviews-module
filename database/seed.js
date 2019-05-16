const Faker = require('faker');

const Seed = {
  foodWords: ['pot roast', 'chicken', 'sushi', 'marshmallows', 'pumpkin pie', 'wine'],
  tagWords: ['groups', 'kids', 'gluten free', 'vegan'],
  getRandomFoodWord: function() {
    return Seed.foodWords[Math.floor(Math.random() * Seed.foodWords.length)];
  },
  getRandomTagWord: function() {
    return Seed.tagWords[Math.floor(Math.random() * Seed.tagWords.length)];
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
    let reviews = [];
    for (var i = 0; i < 100; i++) {
      var review = {};
      review.restaurant = Faker.random.number(1, 5);
      review.diner = Faker.random.number(1, 50);
      review.text = Faker.lorem.sentences();
      review.date = Faker.date.recent();
      review.overall = Faker.random.number(0, 5);
      review.food = Faker.random.number(0, 5);
      review.service = Faker.random.number(0, 5);
      review.ambience = Faker.random.number(0, 5);
      review.wouldRecommend = Faker.random.boolean();
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
  },
  insertDiners: function(diners) {
    //  insert 50 diners 
  },
  insertReviews: function(reviews) {
    //  insert 100 reviews
  }
};

export default Seed;
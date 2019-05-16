const Seed = {
  all: function() {
    Seed.restaurants();
    Seed.users();
    Seed.reviews();
    Seed.impressions();
  },
  restaurants: function() {
    //  insert 5 restaurants with randomized data into my postgres database's 'restaurants' table
  },
  users: function() {
    //  insert 50 users with randomized data into my postgres database's 'restaurants' table
  },
  reviews: function() {
    //  insert 100 reviews with randomized data into my postgres database's 'reviews' table
  },
  impressions: function() {
    //  update all the restaurants in my database with data calculated for the impressions fields froms the reviews data
  }
};

export default Seed;
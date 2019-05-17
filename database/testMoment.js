const Faker = require('faker');
const moment = require('moment');

let date = Faker.date.recent();
let mom = moment().format('YYYY-MM-DD', date);
console.log(mom);
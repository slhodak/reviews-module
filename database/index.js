const Knex = require('knex');
const pg = require('pg');

const knex = Knex({
  client: 'pg',
  version: '11.2',
  connection: {
    host: 'http://127.0.0.1',
    user: 'postgres',
    database: 'reviews'
  },
  debug: true
});

module.exports.knex = knex;
const { Client } = require('pg');

const client = new Client({
  user: 'macuser',
  host: 'localhost',
  database: 'reviews',
  port: 5432
});

module.exports.client = client;
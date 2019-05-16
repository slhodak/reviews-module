const { Client } = require('pg');

const client = new Client({
  user: 'admin',
  host: 'localhost',
  database: 'reviews',
  password: '',
  port: 5432
});

client.connect();

client.query('select now()', (err, res) => {
  console.log(err, res);
  client.end();
});

module.exports.client = client;
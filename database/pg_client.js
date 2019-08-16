const { Client } = require('pg');
const dbconf = require('../config/db_config');

const createClient = () => {
  return new Client({
    host: dbconf.host,
    database: 'reviews',
    port: 5432
  });
};

module.exports = createClient;

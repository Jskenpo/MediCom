const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'medicom.c64q2jpilfie.us-east-2.rds.amazonaws.com',
  database: 'medicom',
  password: 'ClaveRDS#1',
  port: 5432, 
});

module.exports = { pool };
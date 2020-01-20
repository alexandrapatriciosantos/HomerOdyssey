const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'dinamarca17',
  database: 'wild_db_quest',
});
module.exports = connection;

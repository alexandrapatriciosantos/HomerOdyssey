const connection = require('../db/config');

const User = {};

User.create = (body, callback) => {
  connection.query(
    `INSERT INTO users (email, password, name, lastname) 
            VALUES (?,?,?,?)`,
    [body.email, body.password, body.name, body.lastname],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

module.exports = User;

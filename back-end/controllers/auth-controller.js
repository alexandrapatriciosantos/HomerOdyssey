const User = require('../models/User');

const createUser = (req, res) => {
  User.create(req.body, (err) => {
    if (err) return res.json({ error: err });
    res.sendStatus(200);
  });
};

module.exports = { createUser };

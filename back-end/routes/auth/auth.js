const express = require('express');
const { createUser } = require('../../controllers/auth-controller');


const router = express.Router();

router.get('/signup', (req, res) => {
  res.send('youhou');
});

router.post('/signup', createUser);

module.exports = router;

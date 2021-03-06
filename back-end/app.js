// declare all the necessary libraries
const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');


const app = express();
const authRouter = require('./routes/auth/auth');

// set up the application
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));
// where authRouter is imported
app.use('/auth', authRouter);

// implement the API part
app.get('/', (req, res) => {
  res.send('youhou');
});
// / in case path is not found, return the 'Not Found' 404 code
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// launch the node server
const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening on port ${server.address().port}`);
});

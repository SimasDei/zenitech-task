const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const products = require('./api/routes/products.js');
const comments = require('./api/routes/comments.js');

const app = express();

// Middleware Setup
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS Headers setup
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', '*');
    return res.status(200).json({});
  }
  next();
});

// Database Connection
const db = require('./config/config').mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connection to DB Established, Captain! o/'))
  .catch(err => console.log(err));

// API Routes
app.use('/products', products);
app.use('/comments', comments);

// Error Handling
app.use((req, res, next) => {
  const error = new Error('Route Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

// Server Initialization
const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server running on Port ${port} Captain, o/`)
);

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const products = require('./api/routes/products.js');

const app = express();
app.use(morgan('dev'));

const db = require('./config/config').mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connection to DB Established, Captain! o/'))
  .catch(err => console.log(err));

app.use('/products', products);

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

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server running on Port ${port} Captain, o/`)
);

const express = require('express');
const mongoose = require('mongoose');

const products = require('./routes/api/products.js');

const app = express();

const db = require('./config/config').mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connection to DB Established, Captain! o/'))
  .catch(err => console.log(err));

app.get('/', (req, res, next) => res.send('Ahoy there Sailor o/'));

app.use('/api/products', products);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server running on Port ${port} Captain, o/`)
);

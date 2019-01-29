const express = require('express');
const mongoose = require('mongoose');

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

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server running on Port ${port} Captain, o/`)
);

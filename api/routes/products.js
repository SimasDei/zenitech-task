const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../../models/Product');

// GET all Products
router.get('/', (req, res, next) => {
  Product.find()
    .then(product => {
      if (!product) {
        return res.status(404).json({ error: 'No Products Found' });
      }
      res.status(200).json(product);
    })
    .catch(err => {
      res.status(404).json({ error: 'Could not  utilize Model or Route' });
    });
});

// POST a product

module.exports = router;

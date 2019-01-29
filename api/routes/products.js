const express = require('express');
const router = express.Router();

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

// GET product but ID
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Product.findById(id)
    .exec()
    .then(document => {
      console.log(document);
      res.status(200).json(document);
    })
    .catch(error => {
      res.status(500).json({ error: error });
    });
});

// POST a product
router.post('/', (req, res, next) => {
  const product = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    stock: req.body.stock
  };
  product.location = {
    country: req.body.country,
    city: req.body.city,
    street: req.body.street,
    gps: req.body.gps
  };

  const productData = new Product(product);

  productData
    .save()
    .then(result => {
      console.log(result);
    })
    .catch(error => console.log(error));

  res.status(201).json({
    message: 'Post request to /products',
    createdProduct: product
  });
});

module.exports = router;

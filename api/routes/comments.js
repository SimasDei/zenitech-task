const express = require('express');
const router = express.Router();

const Comment = require('../../models/Comment');
const Product = require('../../models/Product');

router.post('/', (req, res, next) => {
  const comment = new Comment({
    product: req.body.productId,
    title: req.body.title,
    content: req.body.content
  });
  comment
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: error });
    });
});

router.get('/', (req, res, next) => {
  Comment.find()
    .then(document => {
      res.status(200).json(document);
    })
    .catch(error => {
      res.status(500).json({ error: error });
    });
});

module.exports = router;

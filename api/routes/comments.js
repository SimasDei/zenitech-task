const express = require('express');
const router = express.Router();

const Comment = require('../../models/Comment');

// POST comment, productID references Product model
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

// GET get all comments
router.get('/', (req, res, next) => {
  Comment.find()
    .then(document => {
      res.status(200).json(document);
    })
    .catch(error => {
      res.status(500).json({ error: error });
    });
});

// GET single comment
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Comment.findById(id)
    .then(document => {
      res.status(200).json(document);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: error });
    });
});

//GET comment single products comments
router.get('/product/:productId', (req, res, next) => {
  const productId = req.params.productId;
  Comment.find({ product: productId })
    .then(documents => {
      if (!documents) {
        res.status(404).json({ error: 'No Comments Found' });
      }
      res.status(200).json(documents);
    })
    .catch(error => {
      res.status(500).json({ error: error });
    });
});

module.exports = router;

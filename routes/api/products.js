const express = require('express');
const router = express.Router();

router.get('/testaroonie', (req, res) =>
  res.json({
    message: 'Products Route seems to be Okay !'
  })
);

module.exports = router;

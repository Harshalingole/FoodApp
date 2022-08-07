const express = require('express');
// const { dirname } = require('path');
const router = express.Router();
const productData = require('./Results');
router.get('/', (req, res) => {
  res.send(productData);
});

module.exports = router;

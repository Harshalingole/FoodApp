const express = require('express');
// const { dirname } = require('path');
const router = express.Router();
const productData = require('./Results');

router.use(function(req,res,next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
router.get('/', (req, res) => {
  res.send(productData);
});

module.exports = router;

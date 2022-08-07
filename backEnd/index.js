const express = require('express');
// const mongoose = require('mongoose')
const port = 4000;
const path = require('path');
const bodyParser = require('body-parser');
const Routes = require('./Routes/CartRoute');

const app = express();

const Route = require('./Routes/CartRoute');

app.use('/', Routes);
app.listen(port, () => {
  console.log('FoodBackEnd : Connected to ' + port);
});

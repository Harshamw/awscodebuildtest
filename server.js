const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 80;

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin,Content-Type,Accept, Authorization, X-Requested-With");
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'DELETE, HEAD, GET, OPTIONS, POST, PUT,PATCH');
    return res.status(200).json({});
  }
  next();
});

// middlewares
app.use(bodyParser.json());
// controller
const authController = require('./controller/authController.js');

app.use('/api/auth', authController);

app.listen(port, () => {
  console.log('API server started on: ' + port);
});



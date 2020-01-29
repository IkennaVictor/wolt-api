
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const restaurantRoutes = require('./src/routes/restaurant');

const app = express();
const uri = 'mongodb://localhost:27017/wolt-db'
mongoose.connect(uri, { useFindAndModify: false })
.then(() => {
    console.log('Successfully connected to mongoDB!');
})
.catch((error) => {
    console.log('Unable to connect to mongoDB');
    console.error(error);
});

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(bodyParser.json());

    // Serving static files from "public" folder
    app.use(express.static('public'));

  app.use('/images', express.static(path.join(__dirname, 'images')));
  
  app.use('/api/restaurants', restaurantRoutes);

module.exports = app;

const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config(); // Load environment variables

const apiKey = process.env.REACT_APP_API_APPID;

app.get('/', async (req, res, next) => {
  try {
    const { city, state, country } = req.query;
    console.log(city, state, country);
    // Rest of your code to fetch weather data and send the response
    next();
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
    next();
  }
});
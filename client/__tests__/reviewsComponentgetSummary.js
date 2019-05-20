const request = require('supertest');
const express = require('express');

const app = express();
const mockData = {
  location: 'West Ernieville',
  noise: 'Average',
  recommendPercent: 36,
  valueRating: '4',
  averageOverall: '0.4',
  averageFood: '4.5',
  averageAmbience: '4.5',
  averageService: '5'
};

app.get('http://localhost:3010/2/impression', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.json({ mockData });
});

request(app)
  .get('/2/impression')
  .expect('Content-Length', '151')
  .end((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('successful api test!');
    }
  });

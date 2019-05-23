const path = require('path');
const express = require('express');
const db = require('../database/index.js');

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/:id/summary', (req, res) => {
  db.getImpression(req.params.id, (err, result) => {
    if (err) {
      res.status(500);
      res.end();
    } else {
      res.status(200);
      res.send(result);
    }
  });
});

app.get('/:id/reviews', (req, res) => {
  db.getAllReviews(req.params.id, (err, result) => {
    if (err) {
      res.status(500);
      res.end();
    } else {
      res.status(200);
      res.send(result);
    }
  });
});

module.exports = app;

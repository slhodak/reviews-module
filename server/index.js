const express = require('express');
const path = require('path');
const db = require('../database/index.js');

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(3010, () => {
  console.log('Reviews module server listening on port 3010!'); 
});

app.get('/:id/impression', (req, res) => {
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

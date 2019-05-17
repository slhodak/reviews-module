const express = require('express');
const path = require('path');
const app = express();
const db = require('../database/index.js');

app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(3010, () => { 
  console.log('Reviews module server listening on port 3010!'); 
});

app.get('/:id/impression', (req, res) => {
  // respond with relevant data from restaurants table based on restaurant's id
  db.getImpression(req.params.id, (err, result) => {
    if (err) {
      console.log('Error getting restaurant impression: ' + err.stack);
      res.status(500);
      res.end();
    } else {
      console.log('Fetched restaurant impression: ' + result);
      res.status(200);
      res.send(result);
    }
  });

});

app.get('/:id/reviews', (req, res) => {
  // respond with all reviews for this restaurant's id
  db.getAllReviews(req.params.id, (err, result) => {
    if (err) {
      console.log('Error getting reviews: ' + err.stack);
      res.status(500);
      res.end();
    } else {
      console.log('Fetched review results: ' + result);
      res.status(200);
      res.send(result);
    }
  });
});
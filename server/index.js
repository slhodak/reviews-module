const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(3010, () => { 
  console.log('Reviews module server listening on port 3010!'); 
});

app.get('/id/impression', (req, res) => {
  // respond with relevant data from restaurants table based on restaurant's id
});

app.get('/id/reviews', (req, res) => {
  // respond with all reviews for this restaurant's id
});
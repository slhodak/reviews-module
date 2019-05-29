import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/reviewsComponent.jsx';

// How is id sent to module? Middleware for express to parse param?
ReactDOM.render(
  <Reviews restaurantId={window.location.href.split('/')[3]} />, document.getElementById('reviews')
);

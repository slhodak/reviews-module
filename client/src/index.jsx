import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/ReviewsComponent.jsx';
import './styles/styles.css';
import logo from './styles/logo.jsx';

// How is id sent to module? Middleware for express to parse param?
ReactDOM.render(
  <div>
    {logo}
    <Reviews restaurantId={3} />
  </div>, document.getElementById('main')
);

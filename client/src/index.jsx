import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/reviewsComponent.jsx';
import './styles/styles.css';

// How is id sent to module? Middleware for express to parse param?
ReactDOM.render(<Reviews restaurantId={4} />, document.getElementById('main'));

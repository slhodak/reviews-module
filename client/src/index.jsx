import React from 'react';
import ReactDOM from 'react-dom';
import ReviewsModule from './components/reviewsModule.jsx';
import './styles/styles.css';

// How is id sent to module? Middleware for express to parse param?
ReactDOM.render(<ReviewsModule restaurantId={4} />, document.getElementsByTagName('main')[0]);

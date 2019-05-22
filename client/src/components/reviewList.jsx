import React from 'react';
import PropTypes from 'prop-types';
import Review from './review.jsx';

function ReviewList(props) {
  const { reviews } = props;
  return (
    <div id="reviews-list">
      {reviews.map(review => (
        <Review review={review} />
      ))}
    </div>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewList;

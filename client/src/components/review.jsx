import React from 'react';
import PropTypes from 'prop-types';

function Review(props) {
  const { review } = props;
  return (
    <div id="single-review">
      <div id="reviewer">
        <div id="initials-icon">
          <div>J</div>
        </div>
        <p id="name">Jaclyn</p>
        <p id="city">Baltimore</p>
        <p id="reviews-count"><span id="review-icon" />2 reviews</p>
      </div>
      <div id="review-details">

      </div>
    </div>
  );
}

Review.propTypes = {
  review: PropTypes.object.isRequired
};

export default Review;

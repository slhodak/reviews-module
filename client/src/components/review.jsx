import React from 'react';
import PropTypes from 'prop-types';

function Review(props) {
  const { review } = props;
  return (
    <div>
      <h3>{review.diner}</h3>
    </div>
  );
}

Review.propTypes = {
  review: PropTypes.object.isRequired
};

export default Review;

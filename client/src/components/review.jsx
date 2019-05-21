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
        <div id="header">
          <div id="stars"></div>
          <p id="date"></p>
        </div>
        <div id="ratings">
          <p>Overall 3 &middot;</p>
        </div>
        <p id="text">{review.text}</p>
        <div id="report-help">
          <button type="button" id="report">Report</button>
          <button type="button" id="helpful">Helpful</button>
        </div>
      </div>
    </div>
  );
}

Review.propTypes = {
  review: PropTypes.object.isRequired
};

export default Review;

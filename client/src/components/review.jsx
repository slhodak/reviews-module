import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

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
          <div id="stars">
            <span className="review-star" />
            <span className="review-star" />
            <span className="review-star" />
            <span className="review-star" />
            <span className="review-star" />
          </div>
          <p id="date">{moment().format('MMMM Do, YYYY', review.date)}</p>
        </div>
        <div id="ratings">
          <span>Overall <span className="rating">{review.overall}</span> &middot; </span>
          <span>Food <span className="rating">{review.food}</span> &middot; </span>
          <span>Service <span className="rating">{review.service}</span> &middot; </span>
          <span>Ambience <span className="rating">{review.ambience}</span></span>
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

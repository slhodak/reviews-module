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
        <div id="reviewer-stat">
          <span id="review-icon" /><p id="reviews-count">2 reviews</p>
        </div>
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
          <span className="rating-name">Overall</span>
          <span className="rating">{review.overall}
            <span className="dot">&middot;</span>
          </span>
          <span className="rating-name">Food</span>
          <span className="rating">{review.food}
            <span className="dot">&middot;</span>
          </span>
          <span className="rating-name">Service</span>
          <span className="rating">{review.service}
            <span className="dot">&middot;</span>
          </span>
          <span className="rating-name">Ambience</span>
          <span className="rating">{review.ambience}</span>
        </div>
        <p id="text">{review.text}</p>
        <div id="report-helpful">
          <div id="report">
            <i id="report-icon" /><button type="button">Report</button>
          </div>
          <div id="helpful">
            <i id="helpful-icon" /><button type="button">Helpful</button>
          </div>
        </div>
      </div>
    </div>
  );
}

Review.propTypes = {
  review: PropTypes.object.isRequired
};

export default Review;

import React from 'react';
import PropTypes from 'prop-types';


export default function Summary(props) {
  const { totalReviews } = props;
  const { restaurantId } = props;
  return (
    <div id="reviews-summary">
      <div className="reviews-header">{`What ${totalReviews} People Are Saying`}</div>
      <div id="reviews-summary-main">
        <div id="reviews-summary-left-column">
          <div className="reviews-subheader-bold">Overall ratings and reviews</div>
          <div className="reviews-summary-text-large">Reviews can only be made by diners who have eaten at this restaurant</div>
          <div id="reviews-summary-stars">
            <div className="review-star" />
          </div>
          <div id="reviews-summary-average-ratings">
            {/* include average ratings with correct borders between */}
          </div>
          <div id="reviews-summary-noise">
            <span id="noise-icon" />
            <div>Noise * </div>
          </div>
          <div id="reviews-summary-recommendation-percent">
            <span id="thumb-icon" />
            <div> % of people would recommend it to a friend.</div>
          </div>
          <a id="reviews-summary-best-link" href={`}http://localhost:3010/${restaurantId}`}>Best Restaurants in </a>
        </div>
        <div id="reviews-summary-right-column">
          <div id="reviews-rating-bars">Bars go here</div>
        </div>
      </div>
    </div>
  );
}

Summary.propTypes = {
  totalReviews: PropTypes.number.isRequired,
  restaurantId: PropTypes.number.isRequired
};

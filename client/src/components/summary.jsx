import PropTypes from 'prop-types';
import React from 'react';

function Summary(props) {
  const { totalReviews } = props;
  const { summary } = props;
  const { starPercentages } = props;
  const { handleRatingClick } = props;
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (summary.averageOverall >= i + 1) {
      stars[i] = <span className="review-star" />;
    } else {
      stars[i] = <span className="review-star-blank" />;
    }
  }
  return (
    <div className="summary">
      <div className="header">
        <h4>What {totalReviews} People Are Saying</h4>
      </div>
      <div className="sub-header">
        <p>Overall ratings and reviews</p>
      </div>
      <div className="center">
        <div className="left">
          <p className="disclaimer">Reviews can only be made by diners who have eaten at this restaurant</p>
          <div className="overallStars">
            <div className="summary-stars">
              {stars}
            </div>
            <p>{summary.averageOverall} based on recent ratings</p>
          </div>
          <div className="overallRatings">
            <div className="food">
              <p className="rating">{summary.averageFood}</p>
              <p>Food</p>
            </div>
            <div className="service">
              <p className="rating">{summary.averageService}</p>
              <p>Service</p>
            </div>
            <div className="ambience">
              <p className="rating">{summary.averageAmbience}</p>
              <p>Ambience</p>
            </div>
            <div className="value">
              <p className="rating">{summary.valueRating}</p>
              <p>Value</p>
            </div>
          </div>
          <div className="noise">
            <div className="noise-icon" />
            <span>Noise &middot; {summary.noise}</span>
          </div>
          <div className="recommend">
            <div className="recommend-icon" />
            <span><strong>{summary.recommendPercent}% of people</strong> would recommend it to a friend</span>
          </div>
        </div>
        <div className="right">
          <div className="bars">
            {starPercentages.map(ratingAndPercent => (
              <div className="bar" key={ratingAndPercent[0]}>
                <span>{(ratingAndPercent[0] + 1).toString()}</span>
                <div className="bar-container" id={`bar${ratingAndPercent[0] + 1}`} onClick={handleRatingClick}>
                  <div className="progress" style={{ width: `${ratingAndPercent[1]}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="summary-bottom">
        <div className="link">
          <a>Best Restaurants in {summary.location} ›</a>
        </div>
      </div>
    </div>
  );
}

Summary.propTypes = {
  totalReviews: PropTypes.number.isRequired,
  summary: PropTypes.object.isRequired,
  handleRatingClick: PropTypes.func.isRequired,
  starPercentages: PropTypes.array.isRequired
};

export default Summary;

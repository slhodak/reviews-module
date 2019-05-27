import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Report from './Report.jsx';

function Review(props) {
  const { review } = props;
  const { openReport } = props;
  const { handleReportClick } = props;
  const { handleReportClear } = props;
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (review.overall >= i + 1) {
      stars[i] = <span className="review-star" />;
    } else {
      stars[i] = <span className="review-star-blank" />;
    }
  }
  const initials = review.firstname[0].toUpperCase() + review.lastname[0].toUpperCase();
  return (
    <div className="single-review">
      <div className="reviewer">
        <div className="initials-icon" style={{ backgroundColor: review.avatarcolor }}>
          {review.isvip
            ? <div className="vip-label">VIP</div>
            : null}
          <div>{initials}</div>
        </div>
        <p className="name">{review.firstname + review.lastname[0]}</p>
        <p className="city">{review.city}</p>
        <div className="reviewer-stat">
          <span className="review-icon" /><p className="reviews-count">{review.totalreviews} reviews</p>
        </div>
      </div>
      <div className="review-details">
        <div className="header">
          <div className="stars">
            {stars}
          </div>
          <p className="date">&nbsp;&middot;&nbsp;&nbsp;Dined on {moment(review.date).format('MMMM Do, YYYY')}</p>
        </div>
        <div className="ratings">
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
        <p className="text">{review.text}</p>
        <div className="report-helpful">
          <div className="report" onClick={handleReportClick} data-id={review.id}>
            {openReport
              ? <Report handleReportClear={handleReportClear} />
              : null}
            <i className="report-icon" />
            <p>Report</p>
          </div>
          <div className="helpful">
            <i className="helpful-icon" />
            <p>Helpful</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Review.propTypes = {
  review: PropTypes.object.isRequired,
  openReport: PropTypes.bool,
  handleReportClick: PropTypes.func.isRequired,
  handleReportClear: PropTypes.func.isRequired
};

Review.defaultProps = {
  openReport: null
};

export default Review;

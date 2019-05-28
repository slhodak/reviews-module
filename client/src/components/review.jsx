import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Report from './Report.jsx';
import styles from '../styles/styles.module.css';

function Review(props) {
  const { review } = props;
  const { openReport } = props;
  const { handleReportClick } = props;
  const { handleReportClear } = props;
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (review.overall >= i + 1) {
      stars[i] = <span className={styles.reviewStar} />;
    } else {
      stars[i] = <span className={styles.reviewStarBlank} />;
    }
  }
  const initials = review.firstname[0].toUpperCase() + review.lastname[0].toUpperCase();
  return (
    <div className={styles.singleReview}>
      <div className={styles.reviewer}>
        <div className={styles.initialsIcon} style={{ backgroundColor: review.avatarcolor }}>
          {review.isvip
            ? <div className={styles.vipLabel}>VIP</div>
            : null}
          <div>{initials}</div>
        </div>
        <p className={styles.name}>{review.firstname + review.lastname[0]}</p>
        <p className={styles.city}>{review.city}</p>
        <div className={styles.reviewerStat}>
          <span className={styles.reviewIcon} /><p className={styles.reviewsCount}>{review.totalreviews} reviews</p>
        </div>
      </div>
      <div className={styles.reviewDetails}>
        <div className={styles.reviewHeader}>
          <div className={styles.stars}>
            {stars}
          </div>
          <p className={styles.date}>&nbsp;&middot;&nbsp;&nbsp;Dined on {moment(review.date).format('MMMM Do, YYYY')}</p>
        </div>
        <div className={styles.ratings}>
          <span className={styles.ratingName}>Overall</span>
          <span className={styles.rating}>{review.overall}
            <span className={styles.dot}>&middot;</span>
          </span>
          <span className={styles.ratingName}>Food</span>
          <span className={styles.rating}>{review.food}
            <span className={styles.dot}>&middot;</span>
          </span>
          <span className={styles.ratingName}>Service</span>
          <span className={styles.rating}>{review.service}
            <span className={styles.dot}>&middot;</span>
          </span>
          <span className={styles.ratingName}>Ambience</span>
          <span className={styles.rating}>{review.ambience}</span>
        </div>
        <p className={styles.text}>{review.text}</p>
        <div className={styles.reportHelpful}>
          <div className={styles.report} onClick={handleReportClick} data-id={review.id}>
            {openReport
              ? <Report handleReportClear={handleReportClear} />
              : null}
            <i className={styles.reportIcon} />
            <p>Report</p>
          </div>
          <div className={styles.helpful}>
            <i className={styles.helpfulIcon} />
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

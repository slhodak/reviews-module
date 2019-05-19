import React from 'react';
import PropTypes from 'prop-types';

export default class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { totalReviews } = this.props;
    return (
      <div id="reviews-summary">
        <div className="reviews-header">{`What ${totalReviews} People Are Saying`}</div>
        <div className="reviews-subheader-bold">Overall ratings and reviews</div>
        <div className="reviews-summary-text-large">Reviews can only be made by diners who have eaten at this restaurant</div>
        <div id="reviews-summary-stars">
          <div className="review-stars"></div>
        </div>
      </div>
    );
  }
}

Summary.propTypes = {
  totalReviews: PropTypes.number.isRequired
};

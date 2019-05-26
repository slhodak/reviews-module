import React from 'react';
import PropTypes from 'prop-types';

const Report = (props) => {
  const { reviewId } = props;
  return (
    <div className="report-popup">
      <h3>Report this review as inappropriate?</h3>
      <p>If you believe this review should be removed from FreeSeats, please let us know and someone will investigate.</p>
      <textarea />
      <div className="report-buttons">
        <button type="submit" className="report" data-reviewId={reviewId}>Report</button>
        <button type="button" className="cancel">Cancel</button>
      </div>
    </div>
  );
};

Report.propTypes = {
  reviewId: PropTypes.number.isRequired
};

export default Report;

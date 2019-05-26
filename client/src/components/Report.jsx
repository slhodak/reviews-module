import React from 'react';
import PropTypes from 'prop-types';

const Report = (props) => {
  return (
    <div className="report-popup-container">
      <div className="report-popup">
        <h3>Report this review as inappropriate?</h3>
        <div className="report-center">
          <p>If you believe this review should be removed from FreeSeats, please let us know and someone will investigate.</p>
          <textarea placeholder="Tell us why you find the review inappropriate." />
        </div>
        <div className="report-buttons">
          <button type="submit" className="report-button">Report</button>
          <button type="button" className="cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Report;

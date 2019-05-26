import React from 'react';
import PropTypes from 'prop-types';

class Report extends React.Component {
  constructor(props) {
    super(props);

    this.componentWillMount = this.componentWillMount.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick(event) {
    if (this.reportPopup.contains(event.target)) {
      return;
    }
    const { handleReportClear } = this.props;
    handleReportClear();
  }

  render() {
    return (
      <div ref={(node) => { this.reportPopup = node; }} className="report-popup-container">
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
  }
}

Report.propTypes = {
  handleReportClear: PropTypes.func.isRequired
};

export default Report;

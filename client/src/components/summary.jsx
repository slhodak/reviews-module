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
      </div>
    );
  }
}

Summary.propTypes = {
  totalReviews: PropTypes.number.isRequired
};

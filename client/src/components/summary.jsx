import React from 'react';
import PropTypes from 'prop-types';

export default class Summary extends React.Component {
  render() {
    const { totalReviews } = this.props;
    return (
      <div id="summary">
        <h1>{`What ${totalReviews} People Are Saying`}</h1>
      </div>
    );
  }
};

Summary.propTypes = {
  totalReviews: PropTypes.number.isRequired
};

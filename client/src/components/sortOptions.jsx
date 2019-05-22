import React from 'react';
import PropTypes from 'prop-types';

function SortOptions(props) {
  const { options } = props;
  return (
    <div className="sort-options">
      {options.map(option => (
        <div className="option">
          <span className="option-name">{option.name}</span>
        </div>
      ))}
    </div>
  );
}

SortOptions.propTypes = {
  options: PropTypes.array.isRequired
};

export default SortOptions;

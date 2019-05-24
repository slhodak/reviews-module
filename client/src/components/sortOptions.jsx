import React from 'react';
import PropTypes from 'prop-types';

function SortOptions(props) {
  const { options } = props;
  const { handleSortOptionClick } = props;
  return (
    <div className="sort-options">
      {options.map(option => (
        <div className="option" key={option} onClick={handleSortOptionClick} data-option={option}>
          <input type="radio" />
          <span className="radio-button">
            <span className="inner-dot" />
          </span>
          <span className="option-name">{option}</span>
        </div>
      ))}
    </div>
  );
}

SortOptions.propTypes = {
  options: PropTypes.array.isRequired,
  handleSortOptionClick: PropTypes.func.isRequired
};

export default SortOptions;

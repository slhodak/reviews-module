import React from 'react';
import PropTypes from 'prop-types';

function SortOptions(props) {
  const { options } = props;
  const { handleSortOptionClick } = props;
  return (
    <div className="sort-options">
      {options.map(option => (
        <div className="option" key={option}>
          <input type="radio" onChange={handleSortOptionClick} data-option={option} />
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

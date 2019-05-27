import React from 'react';
import PropTypes from 'prop-types';
import { sortRadio, sortRadioFilled } from '../styles/svgs/svgs.jsx';

const SortOptions = (props) => {
  const { options } = props;
  const { sortBy } = props;
  const { handleSortOptionClick } = props;
  return (
    <div className="sort-options">
      {options.map(option => (
        <div className="option" key={option} onClick={handleSortOptionClick} data-option={option}>
          {sortBy === option
            ? sortRadioFilled
            : sortRadio}
          <span className="option-name">{option}</span>
        </div>
      ))}
    </div>
  );
}

SortOptions.propTypes = {
  sortBy: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleSortOptionClick: PropTypes.func.isRequired
};

export default SortOptions;

import React from 'react';
import PropTypes from 'prop-types';

const FilterButton = (props) => {
  const { tag } = props;
  const { handleFilterClick } = props;
  return (
    <div className="filter-button selected" key={tag} data-tag={tag} onClick={handleFilterClick}>
      <input type="checkbox" className="filter-checkbox" />
      <span className="filter-name">{tag}</span>
    </div>
  );
};

FilterButton.propTypes = {
  tag: PropTypes.string.isRequired,
  handleFilterClick: PropTypes.func.isRequired
};

export default FilterButton;

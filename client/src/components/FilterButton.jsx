import React from 'react';
import PropTypes from 'prop-types';

const FilterButton = (props) => {
  const { tag } = props;
  const { classString } = props;
  const { handleFilterClick } = props;

  return (
    <div className={classString} key={tag} data-tag={tag} onClick={handleFilterClick}>
      <input type="checkbox" className="filter-checkbox" />
      <span className="filter-name">{tag}</span>
    </div>
  );
};

FilterButton.propTypes = {
  classString: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  handleFilterClick: PropTypes.func.isRequired
};

export default FilterButton;

import React from 'react';
import PropTypes from 'prop-types';
import { filterBox, filterBoxChecked } from '../styles/svgs/svgs.jsx';

const FilterButton = (props) => {
  const { tag } = props;
  const { classString } = props;
  const { handleFilterClick } = props;
  const { checked } = props;

  return (
    <div className={classString} key={tag} data-tag={tag} onClick={handleFilterClick}>
      {checked
        ? filterBoxChecked
        : filterBox}
      <span className="filter-name">{tag}</span>
    </div>
  );
};

FilterButton.propTypes = {
  classString: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  handleFilterClick: PropTypes.func.isRequired,
  checked: PropTypes.bool
};

FilterButton.defaultProps = {
  checked: false
};

export default FilterButton;

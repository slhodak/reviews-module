import React from 'react';
import PropTypes from 'prop-types';

function Sorting(props) {
  const { tags } = props;
  return (
    <div className="sorting-panel">
      <h4>Sort by</h4>
      <div className="sort-area">
        <div className="sort-dropdown">
          <span className="sorter-name">Newest</span>
          <i className="sorter-icon" />
        </div>
      </div>
      <h4>Filters</h4>
      <div className="filters">
        {tags.map(tag => (
          <div className="filter-button">
            <input type="checkbox" className="filter-checkbox" />
            <span className="filter-name">{tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

Sorting.propTypes = {
  tags: PropTypes.array.isRequired
};

export default Sorting;

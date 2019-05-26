import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import SortOptions from './SortOptions.jsx';

function Sorting(props) {
  const { tags } = props;
  const { filters } = props;
  const { choosingSort } = props;
  const { sortBy } = props;
  const { options } = props;
  const { handleSortClick } = props;
  const { handleSortOptionClick } = props;
  const { handleFilterClick } = props;

  //  this could use a refactor
  const filterTags = Object.keys(tags).map((tag) => {
    if (filters.storage[tag]) {
      return (
        <div className="filter-button selected" key={tag} data-tag={tag} onClick={handleFilterClick}>
          <input type="checkbox" className="filter-checkbox" />
          <span className="filter-name">{tag}</span>
        </div>
      );
    }
    return (
      <div className="filter-button" key={tag} data-tag={tag} onClick={handleFilterClick}>
        <input type="checkbox" className="filter-checkbox" />
        <span className="filter-name">{tag}</span>
      </div>
    );
  });
  return (
    <div className="sorting-panel">
      <h4>Sort by</h4>
      <div className="sort-area">
        <div className="sort-dropdown" onClick={handleSortClick}>
          <span className="sorter-name">{sortBy}</span>
          <i className="sorter-icon" />
        </div>
        <div className="options-container">
          {choosingSort
            ? <SortOptions options={options} handleSortOptionClick={handleSortOptionClick} />
            : null}
        </div>
      </div>
      <h4>Filters</h4>
      <div className="filters">
        {filterTags}
      </div>
    </div>
  );
}

Sorting.propTypes = {
  tags: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  choosingSort: PropTypes.bool.isRequired,
  sortBy: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleSortClick: PropTypes.func.isRequired,
  handleSortOptionClick: PropTypes.func.isRequired,
  handleFilterClick: PropTypes.func.isRequired
};

export default Sorting;

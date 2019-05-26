import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import SortOptions from './SortOptions.jsx';
import FilterButton from './FilterButton.jsx';

function Sorting(props) {
  const { tags } = props;
  const { filters } = props;
  const { ratingFilter } = props;
  const { choosingSort } = props;
  const { sortBy } = props;
  const { options } = props;
  const { handleSortClick } = props;
  const { handleSortOptionClick } = props;
  const { handleFilterClick } = props;
  const { unFilterByRating } = props;

  const filterTags = Object.keys(tags).map((tag) => {
    if (filters.storage[tag]) {
      return <FilterButton tag={tag} classString="filter-button selected" handleFilterClick={handleFilterClick} />;
    }
    return <FilterButton tag={tag} classString="filter-button" handleFilterClick={handleFilterClick} />;
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
        {ratingFilter
          ? <FilterButton tag={`${ratingFilter} stars`} classString="filter-button selected" handleFilterClick={unFilterByRating} />
          : null}
        {filterTags}
      </div>
    </div>
  );
}

Sorting.propTypes = {
  tags: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  ratingFilter: PropTypes.number.isRequired,
  choosingSort: PropTypes.bool.isRequired,
  sortBy: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleSortClick: PropTypes.func.isRequired,
  handleSortOptionClick: PropTypes.func.isRequired,
  handleFilterClick: PropTypes.func.isRequired,
  unFilterByRating: PropTypes.func.isRequired
};

export default Sorting;

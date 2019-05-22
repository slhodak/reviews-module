import React from 'react';

export default () => (
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
      <div className="filter-button">
        <input type="checkbox" className="filter-checkbox" />
        <span className="filter-name">Good for groups</span>
      </div>
    </div>
  </div>
);

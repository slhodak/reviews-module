import React from 'react';

export default () => (
  <div className="sorting-panel">
    <h4>Sort by</h4>
    <select className="sorter" />
    <h4>Filters</h4>
    <div className="filters">
      <div clasName="filter-button">
        <input type="checkbox" className="filter-checkbox" />
        <span className="filter-name">Good for groups</span>
      </div>
    </div>
  </div>
);

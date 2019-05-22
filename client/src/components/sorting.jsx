import React from 'react';
import PropTypes from 'prop-types';
import SortOptions from './sortOptions.jsx';

class Sorting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      choosingSort: false
    };
  }

  render() {
    const { tags } = this.props;
    const { choosingSort } = this.state;
    return (
      <div className="sorting-panel">
        <h4>Sort by</h4>
        <div className="sort-area">
          <div className="sort-dropdown">
            <span className="sorter-name">Newest</span>
            <i className="sorter-icon" />
            {choosingSort ? <SortOptions /> : null}
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
}

Sorting.propTypes = {
  tags: PropTypes.array.isRequired
};

export default Sorting;

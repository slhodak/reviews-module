import React from 'react';
import PropTypes from 'prop-types';
import SortOptions from './sortOptions.jsx';

class Sorting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      choosingSort: false,
      options: [
        {
          name: 'Newest'
        },
        {
          name: 'Highest Rating'
        },
        {
          name: 'Lowest Rating'
        }
      ]
    };
    this.handleSortClick = this.handleSortClick.bind(this);
  }

  handleSortClick() {
    const { choosingSort } = this.state;
    this.setState({
      choosingSort: !choosingSort
    });
  }

  render() {
    const { tags } = this.props;
    const { choosingSort } = this.state;
    const { options } = this.state;
    return (
      <div className="sorting-panel">
        <h4>Sort by</h4>
        <div className="sort-area">
          <div className="sort-dropdown" onClick={this.handleSortClick}>
            <span className="sorter-name">Newest</span>
            <i className="sorter-icon" />
          </div>
          <div className="options-container">
            {choosingSort ? <SortOptions options={options} /> : null}
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

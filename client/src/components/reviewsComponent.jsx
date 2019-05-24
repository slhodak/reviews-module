import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import request from 'superagent';
import Summary from './Summary.jsx';
import Sorting from './Sorting.jsx';
import ReviewList from './ReviewList.jsx';
import comparisons from '../helpers';

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.options = [
      'Newest',
      'Highest Rating',
      'Lowest Rating'
    ];

    this.state = {
      summary: null,
      reviews: [],
      showing: [],
      starPercentages: [0, 0, 0, 0, 0],
      allTags: [],
      selectedTags: [],
      choosingSort: false,
      sortBy: 'Newest'
    };

    this.componentWillMount = this.componentWillMount.bind(this);
    this.getSummaryData = this.getSummaryData.bind(this);
    this.getReviewsData = this.getReviewsData.bind(this);
    this.handleRatingClick = this.handleRatingClick.bind(this);
    this.parseStarPercentages = this.parseStarPercentages.bind(this);
    this.getTags = this.getTags.bind(this);
    this.handleSortClick = this.handleSortClick.bind(this);
    this.handleSortOptionClick = this.handleSortOptionClick.bind(this);
    this.sortReviews = this.sortReviews.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
  }

  componentWillMount() {
    this.getSummaryData();
    this.getReviewsData();
  }

  getSummaryData() {
    const { restaurantId } = this.props;
    request
      .get(`http://localhost:3010/${restaurantId}/summary`)
      .then((res) => {
        this.setState({
          summary: res.body[0]
        });
      })
      .catch(err => console.log(err));
  }

  getReviewsData() {
    const { restaurantId } = this.props;
    request
      .get(`http://localhost:3010/${restaurantId}/reviews`)
      .then((res) => {
        this.setState({
          reviews: res.body,
          showing: res.body
        }, () => {
          this.sortReviews();
          this.parseStarPercentages();
          this.getTags();
        });
      })
      .catch(err => console.log(err));
  }

  getTags() {
    let tags = [];
    const { showing } = this.state;
    showing.forEach((review) => {
      if (review.tags) {
        tags = tags.concat(...review.tags.split(','));
      }
    });
    this.setState({
      allTags: _.uniq(tags)
    });
  }

  parseStarPercentages() {
    const { reviews } = this.state;
    const { starPercentages } = this.state;
    reviews.forEach((review) => {
      starPercentages[review.overall - 1] += 1 / reviews.length * 100;
    });
    const reversed = [];
    for (let i = 4; i > -1; i--) {
      reversed.push([i, starPercentages[i]]);
    }
    this.setState({
      starPercentages: reversed
    });
  }

  handleRatingClick(event) {
    const { reviews } = this.state;
    reviews.forEach((review) => {
      if (review.overall.toString() === event.currentTarget.id.slice(3)) {
        console.log(review);
      }
    });
  }

  handleSortClick() {
    const { choosingSort } = this.state;
    this.setState({
      choosingSort: !choosingSort
    });
  }

  handleSortOptionClick(event) {
    this.setState({
      sortBy: event.currentTarget.dataset.option
    }, this.sortReviews);
  }

  sortReviews() {
    const { reviews } = this.state;
    const { sortBy } = this.state;
    reviews.sort(comparisons[sortBy]);
    this.setState({
      showing: reviews
    });
  }

  filterReviews() {
    const { reviews } = this.state;
    const { selectedTags } = this.state;
    let filtered = null;
    if (selectedTags.length) {
      filtered = reviews.filter((review) => {
        const reviewTags = review.tags.split(',');
        for (let i = 0; i < reviewTags.length; i++) {
          if (_.includes(selectedTags, reviewTags[i])) {
            return true;
          }
        }
        return false;
      });
    }
    this.setState({
      showing: filtered || reviews
    }, this.getTags);
  }

  handleFilterClick(event) {
    let { selectedTags } = this.state;
    const indexCheck = selectedTags.indexOf(event.currentTarget.dataset.tag);
    if (indexCheck >= 0) {
      selectedTags.splice(indexCheck, 1);
    } else {
      selectedTags = selectedTags.concat(event.currentTarget.dataset.tag);
    }
    this.setState({
      selectedTags
    }, this.filterReviews);
  }

  render() {
    const { summary } = this.state;
    const { reviews } = this.state;
    const { showing } = this.state;
    const { allTags } = this.state;
    const { sortBy } = this.state;
    const { selectedTags } = this.state;
    const { choosingSort } = this.state;
    const { starPercentages } = this.state;
    return (
      <div className="reviews">
        {summary
          ? (
            <Summary
              summary={summary}
              totalReviews={reviews.length}
              starPercentages={starPercentages}
              handleRatingClick={this.handleRatingClick}
            />
          )
          : null}
        <Sorting
          tags={allTags}
          selectedTags={selectedTags}
          options={this.options}
          sortBy={sortBy}
          choosingSort={choosingSort}
          handleSortClick={this.handleSortClick}
          handleSortOptionClick={this.handleSortOptionClick}
          handleFilterClick={this.handleFilterClick}
        />
        <ReviewList
          reviews={showing}
        />
      </div>
    );
  }
}

Reviews.propTypes = {
  restaurantId: PropTypes.number.isRequired
};

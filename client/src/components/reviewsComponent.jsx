import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import request from 'superagent';
import Summary from './Summary.jsx';
import Sorting from './Sorting.jsx';
import ReviewList from './ReviewList.jsx';
import { comparisons, Models } from '../helpers';

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
      pages: [],
      currentPage: 0,
      pageButtonList: null,
      starPercentages: [0, 0, 0, 0, 0],
      tags: {},
      filters: new Models.FilterSet(),
      choosingSort: false,
      sortBy: 'Newest'
    };

    this.componentWillMount = this.componentWillMount.bind(this);
    this.getSummaryData = this.getSummaryData.bind(this);
    this.getReviewsData = this.getReviewsData.bind(this);
    this.parseStarPercentages = this.parseStarPercentages.bind(this);
    this.getTags = this.getTags.bind(this);

    this.createPages = this.createPages.bind(this);
    this.createPageButtonList = this.createPageButtonList.bind(this);
    this.updatePageButtonList = this.updatePageButtonList.bind(this);
    this.goToPage = this.goToPage.bind(this);
    this.goToNextPage = this.goToNextPage.bind(this);
    this.goToPreviousPage = this.goToPreviousPage.bind(this);

    this.sortReviews = this.sortReviews.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
    this.handleRatingClick = this.handleRatingClick.bind(this);
    this.handleSortClick = this.handleSortClick.bind(this);
    this.handleSortOptionClick = this.handleSortOptionClick.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);
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
    const tags = {};
    const { showing } = this.state;
    showing.forEach((review) => {
      const reviewTags = review.tags.split(',');
      if (reviewTags[0]) {
        for (let i = 0; i < reviewTags.length; i++) {
          tags[reviewTags[i]] = reviewTags[i];
        }
      }
    });
    this.setState({
      tags
    }, this.createPages);
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

  createPages() {
    const { showing } = this.state;
    const pages = [];
    let page = [];
    showing.forEach((review, index) => {
      if (index % 5 < 4) {
        page.push(review);
      } else if (index % 5 === 4) {
        page.push(review);
        pages.push(page);
        page = [];
      }
      if (index === showing.length - 1) {
        pages.push(page);
      }
    });
    this.setState({
      pages
    }, this.createPageButtonList);
  }

  createPageButtonList() {
    const { pages } = this.state;
    const PageButtonList = new Models.ButtonLinkedList(0);
    for (let i = 1; i < pages.length; i++) {
      PageButtonList.addButtonToTail(i);
    }
    this.updatePageButtonList(PageButtonList);
  }

  updatePageButtonList(buttonList = this.state.pageButtonList) {
    const { currentPage } = this.state;
    buttonList.setButtonDisplays(buttonList.head, currentPage);
    this.setState({
      pageButtonList: buttonList
    });
  }

  goToPage(event) {
    this.sortingPanel.scrollIntoView({ behavior: 'smooth' });
    this.setState({
      currentPage: +event.target.dataset.page
    }, this.updatePageButtonList);
  }

  goToNextPage() {
    this.sortingPanel.scrollIntoView({ behavior: 'smooth' });
    const { currentPage } = this.state;
    this.setState({
      currentPage: currentPage + 1
    }, this.updatePageButtonList);
  }

  goToPreviousPage() {
    this.sortingPanel.scrollIntoView({ behavior: 'smooth' });
    const { currentPage } = this.state;
    this.setState({
      currentPage: currentPage - 1
    }, this.updatePageButtonList);
  }

  sortReviews() {
    const { showing } = this.state;
    const { sortBy } = this.state;
    showing.sort(comparisons[sortBy]);
    this.setState({
      showing
    }, this.createPages);
  }

  filterReviews() {
    const { reviews } = this.state;
    const { filters } = this.state;
    let filtered = null;
    if (filters.size) {
      filtered = reviews.filter((review) => {
        const reviewTags = review.tags.split(',');
        if (reviewTags[0]) {
          return filters.isContainedBy(reviewTags);
        }
        return false;
      });
    }
    console.log('filtered' + JSON.stringify(filtered));
    this.setState({
      showing: filtered || reviews,
      currentPage: 0
    }, this.getTags);
  }

  handleSortClick() {
    const { choosingSort } = this.state;
    this.setState({
      choosingSort: !choosingSort
    });
  }

  handleSortOptionClick(event) {
    this.setState({
      sortBy: event.currentTarget.dataset.option,
      choosingSort: false
    }, this.sortReviews);
  }

  handleRatingClick(event) {
    //  add filter: star rating from event
    const { reviews } = this.state;
    reviews.forEach((review) => {
      if (review.overall.toString() === event.currentTarget.id.slice(3)) {
        console.log(review);
      }
    });
  }

  handleFilterClick(event) {
    const { filters } = this.state;
    if (filters.storage[event.currentTarget.dataset.tag]) {
      filters.remove(event.currentTarget.dataset.tag);
    } else {
      filters.add(event.currentTarget.dataset.tag);
    }
    console.log('filters' + JSON.stringify(filters));
    this.setState({
      filters
    }, this.filterReviews);
  }

  render() {
    const { summary } = this.state;
    const { reviews } = this.state;
    const { pages } = this.state;
    const { currentPage } = this.state;
    const { pageButtonList } = this.state;
    const { showing } = this.state;
    const { tags } = this.state;
    const { sortBy } = this.state;
    const { filters } = this.state;
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
        <div ref={(node) => { this.sortingPanel = node; }}>
          <Sorting
            tags={tags}
            filters={filters}
            options={this.options}
            sortBy={sortBy}
            choosingSort={choosingSort}
            handleSortClick={this.handleSortClick}
            handleSortOptionClick={this.handleSortOptionClick}
            handleFilterClick={this.handleFilterClick}
          />
        </div>
        {pageButtonList
          ? (
            <ReviewList
              reviews={showing}
              pages={pages}
              currentPage={currentPage}
              pageButtonList={pageButtonList}
              goToPage={this.goToPage}
              goToNextPage={this.goToNextPage}
              goToPreviousPage={this.goToPreviousPage}
            />
          )
          : null}
      </div>
    );
  }
}

Reviews.propTypes = {
  restaurantId: PropTypes.number.isRequired
};

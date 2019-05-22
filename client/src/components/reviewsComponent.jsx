import React from 'react';
import PropTypes from 'prop-types';
import request from 'superagent';
import Summary from './summary.jsx';
import Sorting from './sorting.jsx';
import ReviewList from './reviewList.jsx';

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      summary: null,
      reviews: [],
      reviewsByRating: {}
    };

    this.componentWillMount = this.componentWillMount.bind(this);
    this.getSummaryData = this.getSummaryData.bind(this);
    this.getReviewsData = this.getReviewsData.bind(this);
    this.handleRatingClick = this.handleRatingClick.bind(this);
    this.parseStarPercentages = this.parseStarPercentages.bind(this);
  }

  componentWillMount() {
    this.getSummaryData();
    this.getReviewsData();
  }

  getSummaryData() {
    const { restaurantId } = this.props;
    request
      .get(`http://localhost:3010/${restaurantId}/impression`)
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
          reviews: res.body
        }, this.parseStarPercentages);
      })
      .catch(err => console.log(err));
  }

  parseStarPercentages() {
    console.log('parsing');
    const { reviews } = this.state;
    const reviewsByRating = {};
    reviews.forEach((review) => {
      if (reviewsByRating[review.overall]) {
        reviewsByRating[review.overall] += 1;
      } else {
        reviewsByRating[review.overall] = 1;
      }
    });
    this.setState({
      reviewsByRating
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

  render() {
    const { summary } = this.state;
    const { reviews } = this.state;
    const { reviewsByRating } = this.state;
    // calculate reviews of each star value
    // use that data to create skill bars and filter
    // must be done when the page loads--b/c skill bars
    return (
      <div className="reviews">
        {summary ? <Summary summary={summary} totalReviews={reviews.length} reviewsByRating={reviewsByRating} handleRatingClick={this.handleRatingClick} /> : null}
        <Sorting />
        <ReviewList reviews={reviews} reviewsByRating={reviewsByRating} />
      </div>
    );
  }
}

Reviews.propTypes = {
  restaurantId: PropTypes.number.isRequired
};

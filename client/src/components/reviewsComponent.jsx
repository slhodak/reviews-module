import React from 'react';
import PropTypes from 'prop-types';
import Summary from './summary.jsx';
import Sorting from './sorting.jsx';
import ReviewList from './reviewList.jsx';

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      summary: null,
      reviews: []
    };

    this.componentWillMount = this.componentWillMount.bind(this);
    this.getSummaryData = this.getSummaryData.bind(this);
    this.getReviewsData = this.getReviewsData.bind(this);
  }

  componentWillMount() {
    this.getSummaryData();
    this.getReviewsData();
  }

  getSummaryData() {
    const { restaurantId } = this.props;
    fetch(`http://localhost:3010/${restaurantId}/impression`)
      .then(response => response.json())
      .then(summaryData => (
        this.setState({
          summary: summaryData[0]
        })
      ))
      .catch((err) => {
        console.log(err);
      });
  }

  getReviewsData() {
    const { restaurantId } = this.props;
    fetch(`http://localhost:3010/${restaurantId}/reviews`)
      .then(response => response.json())
      .then(reviewsData => (
        this.setState({
          reviews: reviewsData
        })
      ))
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { summary } = this.state;
    const { reviews } = this.state;
    return (
      <div id="reviews">
        {summary ? <Summary summary={summary} totalReviews={reviews.length} /> : null}
        <Sorting />
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}

Reviews.propTypes = {
  restaurantId: PropTypes.number.isRequired
};

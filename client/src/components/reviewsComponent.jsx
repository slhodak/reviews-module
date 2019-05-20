import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
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
    $.get(`http://localhost:3010/${restaurantId}/impression`,
      (summaryData) => {
        this.setState({
          summary: summaryData[0]
        }, () => { console.log(summaryData); });
      });
  }

  getReviewsData() {
    const { restaurantId } = this.props;
    $.get(`http://localhost:3010/${restaurantId}/reviews`,
      (reviewsData) => {
        this.setState({
          reviews: reviewsData
        });
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

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
    request
      .get(`http://localhost:3010/${restaurantId}/impression`)
      .then((res) => {
        this.setState({
          summary: res.body[0]
        });
      });
  }

  getReviewsData() {
    const { restaurantId } = this.props;
    request
      .get(`http://localhost:3010/${restaurantId}/reviews`)
      .then((res) => {
        this.setState({
          reviews: res.body
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

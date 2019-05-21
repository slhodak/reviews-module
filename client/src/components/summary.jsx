import PropTypes from 'prop-types';
import React from 'react';


export default class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlighted: ''
    };

    this.toggleBarHighlight = this.toggleBarHighlight.bind(this);
  }

  toggleBarHighlight(event) {
    const { highlighted } = this.state;
    if (highlighted) {
      this.setState({
        highlighted: ''
      }, () => {
        if (document.getElementById(highlighted)) {
          document.getElementById(highlighted).setAttribute('class', 'containerNormal');
        }
      });
    } else {
      this.setState({
        highlighted: event.currentTarget.id
      }, () => {
        if (document.getElementById(this.state.highlighted)) {
          document.getElementById(this.state.highlighted).setAttribute('class', 'containerHighlighted');
        }
      });
    }
  }

  render() {
    const { totalReviews } = this.props;
    const { summary } = this.props;
    const { reviewsByRating } = this.props;
    const { handleRatingClick } = this.props;
    return (
      <div id="summary">
        <div className="header">
          <h4>What {totalReviews} People Are Saying</h4>
        </div>
        <div className="sub-header">
          <p>Overall ratings and reviews</p>
        </div>
        <div className="center">
          <div className="left">
            <p id="disclaimer">Reviews can only be made by diners who have eaten at this restaurant</p>
            <div id="overallStars">
              <div id="stars">
                <div className="review-star" />
                <div className="review-star" />
                <div className="review-star" />
                <div className="review-star" />
                <div className="review-star" />
              </div>
              <p>{summary.averageOverall} based on recent ratings</p>
            </div>
            <div id="overallRatings">
              <div id="food">
                <p className="rating">{summary.averageFood}</p>
                <p>Food</p>
              </div>
              <div id="service">
                <p className="rating">{summary.averageService}</p>
                <p>Service</p>
              </div>
              <div id="ambience">
                <p className="rating">{summary.averageAmbience}</p>
                <p>Ambience</p>
              </div>
              <div id="value">
                <p className="rating">{summary.valueRating}</p>
                <p>Value</p>
              </div>
            </div>
            <div id="noise">
              <div id="noise-icon" />
              <span>Noise &middot; {summary.noise}</span>
            </div>
            <div id="recommend">
              <div id="recommend-icon" />
              <span>{summary.recommendPercent}% <strong>of people</strong> would recommend it to a friend</span>
            </div>
          </div>
          <div className="right">
            <div id="bars">
              {/* Can I generate these? */}
              {Object.keys(reviewsByRating).map(rating => (
                <div className="bar" key={rating}>
                  <span>{rating}</span>
                  <div className="containerNormal" id={`bar${rating}`} onMouseEnter={this.toggleBarHighlight} onMouseLeave={this.toggleBarHighlight} onClick={handleRatingClick}>
                    <div className="progress n-stars" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="summary-bottom">
          <div id="link">
            <a>Best Restaurants in {summary.location} ›</a>
          </div>
        </div>
      </div>
    );
  }
}

Summary.propTypes = {
  totalReviews: PropTypes.number.isRequired,
  summary: PropTypes.object.isRequired,
  handleRatingClick: PropTypes.func.isRequired,
  reviewsByRating: PropTypes.object.isRequired
};

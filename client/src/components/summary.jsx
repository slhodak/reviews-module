import PropTypes from 'prop-types';
import React from 'react';


export default class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oneHighlighted: false,
      twoHighlighted: false,
      threeHighlighted: false,
      fourHighlighted: false,
      fiveHighlighted: false
    };
    this.toggleBarHighlight = this.toggleBarHighlight.bind(this);
  }

  // refactor to satisfy eslint
  toggleBarHighlight(event) {
    console.log(event.currentTarget.id);
    const currentBar = event.currentTarget.id + 'Highlighted';
    const state = this.state[currentBar];
    this.setState({
      [currentBar]: !state
    });
  }

  render() {
    const { totalReviews } = this.props;
    const { summary } = this.props;
    const { oneHighlighted } = this.state;
    const { twoHighlighted } = this.state;
    const { threeHighlighted } = this.state;
    const { fourHighlighted } = this.state;
    const { fiveHighlighted } = this.state;
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
            <p>Reviews can only be made by diners who have eaten at this restaurant</p>
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
              <div className="bar">
                <span>5</span>
                <div id="five" onMouseEnter={this.toggleBarHighlight} onMouseLeave={this.toggleBarHighlight} className={`${fiveHighlighted ? 'containerHighlighted' : 'containerNormal'}`}>
                  <div className="progress n-stars" />
                </div>
              </div>
              <div className="bar">
                <span>4</span>
                <div id="four" onMouseEnter={this.toggleBarHighlight} onMouseLeave={this.toggleBarHighlight} className={`${fourHighlighted ? 'containerHighlighted' : 'containerNormal'}`}>
                  <div className="progress n-stars" />
                </div>
              </div>
              <div className="bar">
                <span>3</span>
                <div id="three" onMouseEnter={this.toggleBarHighlight} onMouseLeave={this.toggleBarHighlight} className={`${threeHighlighted ? 'containerHighlighted' : 'containerNormal'}`}>
                  <div className="progress n-stars" />
                </div>
              </div>
              <div className="bar">
                <span>2</span>
                <div id="two" onMouseEnter={this.toggleBarHighlight} onMouseLeave={this.toggleBarHighlight} className={`${twoHighlighted ? 'containerHighlighted' : 'containerNormal'}`}>
                  <div className="progress n-stars" />
                </div>
              </div>
              <div className="bar">
                <span>1</span>
                <div id="one" onMouseEnter={this.toggleBarHighlight} onMouseLeave={this.toggleBarHighlight} className={`${oneHighlighted ? 'containerHighlighted' : 'containerNormal'}`}>
                  <div className="progress n-stars" />
                </div>
              </div>
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
  summary: PropTypes.object.isRequired
};
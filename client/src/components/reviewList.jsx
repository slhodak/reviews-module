import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review.jsx';

function ReviewList(props) {
  const { pages } = props;
  const { currentPage } = props;
  const { goToPage } = props;
  return (
    <div>
      {pages[currentPage].map(review => (
        <Review key={review.id} review={review} />
      ))}
      <div className="pageButtons">
        <div className="button left" />
        {pages.map((page, index) => (
          <div className="button" data-page={index} onClick={goToPage}>
            <p>{index + 1}</p>
          </div>
        ))}
        <div className="button right" />
      </div>
    </div>
  );
}

ReviewList.propTypes = {
  goToPage: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default ReviewList;

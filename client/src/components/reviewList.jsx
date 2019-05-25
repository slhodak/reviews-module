import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review.jsx';

function ReviewList(props) {
  const { pages } = props;
  const { currentPage } = props;
  const { goToPage } = props;
  console.log('pages: ' + pages);
  return (
    <div>
      {pages[currentPage].map(review => (
        <Review key={review.id} review={review} />
      ))}
      <div className="pageButtons" onClick={goToPage}>
        <div className="button left" data-flip={-1} />
        {pages.map((page, index) => (
          <div className="button" data-page={index}>
            <p>{index + 1}</p>
          </div>
        ))}
        <div className="button right" data-flip={1} />
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

import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review.jsx';

function ReviewList(props) {
  const { pages } = props;
  const { currentPage } = props;
  const { goToPage } = props;
  const { goToNextPage } = props;
  const { goToPreviousPage } = props;

  return (
    <div>
      {pages[currentPage].map(review => (
        <Review key={review.id} review={review} />
      ))}
      {/* if currentpage is 0, this button is no button */}
      <div className="pageButtons">
        {currentPage > 0
          ? <div className="button left" onClick={goToPreviousPage} />
          : <div className="button left dead" />}
        {pages.map((page, index) => (
          <div className="button" data-page={index} onClick={goToPage}>
            <p>{index + 1}</p>
          </div>
        ))}
        {/* if current page is maximum, this button is no button */}
        {currentPage < pages.length - 1
          ? <div className="button right" onClick={goToNextPage} />
          : <div className="button right dead" />}
      </div>
    </div>
  );
}

ReviewList.propTypes = {
  goToPage: PropTypes.func.isRequired,
  goToNextPage: PropTypes.func.isRequired,
  goToPreviousPage: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default ReviewList;

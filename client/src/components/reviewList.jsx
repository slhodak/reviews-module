import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review.jsx';

function ReviewList(props) {
  const { pages } = props;
  const { currentPage } = props;
  const { pageButtonList } = props;
  const { goToPage } = props;
  const { goToNextPage } = props;
  const { goToPreviousPage } = props;
  const { openReport } = props;
  const { handleReportClick } = props;
  const buttonArray = pageButtonList.getArray();
  return (
    <div className="review-list">
      {pages[currentPage].map((review) => {
        if (openReport === review.id) {
          return <Review key={review.id} review={review} openReport handleReportClick={handleReportClick} />;
        }
        return <Review key={review.id} review={review} handleReportClick={handleReportClick} />;
      })}
      <div className="page-buttons">
        {currentPage > 0
          ? <div className="button left" onClick={goToPreviousPage} />
          : <div className="button left dead" />}
        {buttonArray.map((button) => {
          if (button.display === 'button' || button.display === 'button current') {
            return (
              <div className={button.display} data-page={button.page} onClick={goToPage}>
                <p>{button.page + 1}</p>
              </div>
            );
          }
          if (button.display === 'ellipse') {
            return (
              <span className={button.display}>...</span>
            );
          }
          return null;
        })}
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
  currentPage: PropTypes.number.isRequired,
  pageButtonList: PropTypes.object.isRequired,
  openReport: PropTypes.number.isRequired,
  handleReportClick: PropTypes.func.isRequired
};

export default ReviewList;

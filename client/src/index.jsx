import React from 'react';
import ReactDOM from 'react-dom';


class ReviewModule extends React.Component {
  render() {
    return(
      <div>
        <h1>Reviews</h1>
      </div>
    )
  }
};

ReactDOM.render(<ReviewModule />, document.getElementById('reviews'));
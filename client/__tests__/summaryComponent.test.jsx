import React from 'react';
import renderer from 'react-test-renderer';
import Summary from '../src/components/summary.jsx';

it('renders the summary sub-component', () => {
  const summary = {
    location: 'West Ernieville',
    noise: 'Average',
    recommendPercent: 36,
    valueRating: '4',
    averageOverall: '0.4',
    averageFood: '4.5',
    averageAmbience: '4.5',
    averageService: '5'
  };

  const tree = renderer
    .create(<Summary summary={summary} totalReviews={5} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

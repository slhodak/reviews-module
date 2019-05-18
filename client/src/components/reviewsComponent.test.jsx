import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsComponent from './reviewsComponent.jsx';

it('renders correctly', () => {
  const tree = renderer
    .create(<ReviewsComponent />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
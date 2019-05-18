import React from 'react';
import ReviewsComponent from './reviewsComponent.jsx';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<ReviewsComponent />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
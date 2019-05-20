import React from 'react';
import renderer from 'react-test-renderer';
import Reviews from '../client/src/components/reviewsComponent.jsx';

it('renders correctly', () => {
  const tree = renderer
    .create(<Reviews />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

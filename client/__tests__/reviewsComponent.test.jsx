import React from 'react';
import renderer from 'react-test-renderer';
import Reviews from '../src/components/reviewsComponent.jsx';

it('renders correctly', () => {
  const tree = renderer
    .create(<Reviews restaurantId={1} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

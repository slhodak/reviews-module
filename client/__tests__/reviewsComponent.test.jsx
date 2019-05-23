import React from 'react';
import renderer from 'react-test-renderer';
import Reviews from '../src/components/reviewsComponent.jsx';

it('renders the reviews top-level component', () => {
  const tree = renderer
    .create(<Reviews restaurantId={1} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

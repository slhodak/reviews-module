import React from 'react';
import ReviewModule from './index.jsx';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<ReviewModule />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
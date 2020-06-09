import React from 'react';
import { render } from '@testing-library/react';
import Navigation from '../containers/NavHero/Navigation';

it('checks if the navigation renders correctly', () => {
  const { getByTestId } = render(<Navigation />);
  expect(getByTestId('navigation')).toHaveTextContent('Recipes Catalogue');
});

import React from 'react';
import { render } from './test-utils';
import Hero from '../containers/NavHero/Hero';

test('it checks if the hero renders correctly', () => {
  const { getByTestId } = render(<Hero />);
  expect(getByTestId('hero')).toHaveTextContent('Recipes Made Simple');
});

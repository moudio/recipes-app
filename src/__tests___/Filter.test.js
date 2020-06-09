import React from 'react';
import { render } from './test-utils';
import '@testing-library/jest-dom/extend-expect';
import Filter from '../components/Filter/Filter';

it('renders filter component without crashing', () => {
  const { getByPlaceholderText } = render(<Filter />);
  expect(getByPlaceholderText('Filter By Ingredient')).toBeInTheDocument();
});

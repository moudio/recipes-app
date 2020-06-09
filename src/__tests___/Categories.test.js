import React from 'react';
import { render } from './test-utils';
import '@testing-library/jest-dom/extend-expect';
import { Categories } from '../containers/Categories/Categories';

it('checks if Category renders home page while not fetching', () => {
  const { getByTestId } = render(
    <Categories isFetching={false} recipes={[]} />,
  );
  expect(getByTestId('explore-categories')).toHaveTextContent(
    'Explore Our Categories',
  );
});

it('checks if Category renders the fetching route when fetching', () => {
  const { getByTestId } = render(<Categories isFetching />);
  expect(getByTestId('fetching-results')).toHaveTextContent(
    'Fetching Your Results...',
  );
});

it('checks if Category renders not found request after getting bad request', () => {
  const { getByTestId } = render(<Categories isFetching={false} />);
  expect(getByTestId('not-found')).toHaveTextContent(
    'We could not find your request. Please try again',
  );
});

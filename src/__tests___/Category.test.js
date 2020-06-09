import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { Category } from '../containers/Categories/Category';

it('renders category component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Category
      name="Pizza"
      image="https://images.unsplash.com/photo-1588779180563-d7599d127ffe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
      description="Discover our pizza recipes"
      alt="pizza"
      search="pizza"
      findRecipes={() => {
        'recipe found';
      }}
    />,
    div,
  );
});

it('renders name of category correctly', () => {
  const { getByTestId } = render(
    <Category
      name="Pizza"
      description="Discover our pizza recipes"
      alt="pizza"
      search="pizza"
      image="https://images.unsplash.com/photo-1588779180563-d7599d127ffe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
      findRecipes={() => {
        'recipe found';
      }}
    />,
  );
  expect(getByTestId('category-name')).toHaveTextContent('Pizza');
  expect(getByTestId('description')).toHaveTextContent(
    'Discover our pizza recipes',
  );
});

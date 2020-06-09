import React from 'react';
import PropTypes from 'prop-types';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer, {
  defaultState as reducerInitialState,
} from '../reducers/hero_reducer';

function render(
  ui,
  {
    initialState = reducerInitialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  Wrapper.propTypes = {
    children: PropTypes.shape({ subProp: PropTypes.string }).isRequired,
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';

export { render };

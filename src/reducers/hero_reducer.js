import { FETCH_SUCCESS, FETCH_FAILURE } from '../actions/actions';

const defaultState = {
  recipes: [],
  isFetching: false,
};

const heroReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCHING':
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        recipes: action.recipes,
        isFetching: false,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        recipes: [],
        isFetching: false,
      };

    default:
      return state;
  }
};

export default heroReducer;

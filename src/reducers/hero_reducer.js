import {
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FILTER,
  FETCH_SUCCESS_ONE_MEAL,
} from '../actions/actions';

const defaultState = {
  recipes: [],
  isFetching: false,
  oneMeal: false,
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
        loading: false,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        recipes: [],
        isFetching: false,
      };
    case FETCH_SUCCESS_ONE_MEAL:
      return {
        ...state,
        recipes: action.recipes,
        oneMeal: true,
      };
    case FILTER:
      return {
        ...state,
        recipes: state.recipes.filter((meal) => meal.strInstructions.includes(action.ingredient)),
      };

    default:
      return state;
  }
};

export default heroReducer;

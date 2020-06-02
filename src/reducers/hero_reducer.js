import { FETCH_SUCCESS, FETCH_FAILURE, FILTER } from '../actions/actions';

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
        loading: false,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        recipes: [],
        isFetching: false,
      };
    case FILTER:
      const copyRecipes = [...state.recipes];
      const filteredRecipes = copyRecipes.filter((meal) => meal.strInstructions.includes(action.ingredient));

      return {
        ...state,
        recipes: filteredRecipes,
      };

    default:
      return state;
  }
};

export default heroReducer;

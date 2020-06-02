import {
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FILTER,
  SINGLE_MEAL,
} from '../actions/actions';

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
      console.log('success', action);
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
      let copyRecipes = [...state.recipes];
      let filteredRecipes = copyRecipes.filter((meal) =>
        meal.strInstructions.includes(action.ingredient)
      );
      console.log(filteredRecipes);

      return {
        ...state,
        recipes: filteredRecipes,
      };

    default:
      return state;
  }
};

export default heroReducer;

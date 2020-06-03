export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const FILTER = 'FILTER';
export const SINGLE_MEAL = 'SINGLE_MEAL';
export const FETCH_SUCCESS_ONE_MEAL = 'FETCH_SUCCESS_ONE_MEAL';

export const selectRecipe = recipe => dispatch => {
  dispatch({
    type: 'FETCHING',
  });
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`)
    .then(response => response.json())
    .then(recipes => {
      dispatch({
        type: FETCH_SUCCESS,
        recipes: recipes.meals,
        loading: false,
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_FAILURE,
        error,
      });
    });
};

export const singleMeal = id => dispatch => {
  dispatch({
    type: 'FETCHING',
  });
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => response.json())
    .then(recipes => {
      dispatch({
        type: FETCH_SUCCESS_ONE_MEAL,
        recipes: recipes.meals,
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_FAILURE,
        error,
      });
    });
};

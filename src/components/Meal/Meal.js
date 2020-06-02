import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import './Meal.css';
import { singleMeal } from '../../actions/actions';

function Meal({ recipes }) {
  function goBack() {
    window.history.back();
  }

  function findRecipe(id) {
    const meals = recipes;
    const meal = meals.find((element) => element.idMeal === id);
    return meal;
  }

  document.querySelector('.filter').style.display = 'none';
  let id = window.location.href;
  [id] = [id.match(/meal-\d+/)[0]];
  [id] = [id.match(/\d+/)[0]];
  const meal = findRecipe(id);
  const ingredients = [];
  for (const entry of Object.keys(meal)) {
    if (entry.includes('Ingredient') && meal[entry]) {
      const ingredientNumber = entry.split('strIngredient')[1];
      ingredients.push([meal[entry], meal[`strMeasure${ingredientNumber}`]]);
    }
  }
  return (
    <>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-5 recipe-image">
            <img
              src={meal.strMealThumb}
              className="card-img"
              alt={meal.strMeal}
            />
          </div>
          <div className="col-md-7 recipe-content">
            <div className="card-body">
              <h4 className="card-title">{meal.strMeal}</h4>
              <p className="card-text">
                Area:
                {meal.strArea}
              </p>
              <h5 className="card-title">Ingredients</h5>
              {ingredients.map((ingredient) => (
                <span key={Math.random() * 4}>
                  -
                  {ingredient[1]}
                  {ingredient[0]}
                  -
                </span>
              ))}

              <h5 className="card-title">Recipe</h5>
              <p className="card-text">{meal.strInstructions}</p>

              <p className="card-text">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={goBack}
                >
                  Back
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Meal.propTypes = {
  recipes: Proptypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  loading: true,
  oneMeal: true,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMeal: (id) => dispatch(singleMeal(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Meal);

import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import './Meal.css';
import { singleMeal } from '../../actions/actions';
class Meal extends React.Component {
  findRecipe(id) {
    let meals = this.props.recipes;
    let meal = meals.find((meal) => meal.idMeal === id);
    return meal;
  }
  render() {
    let id = window.location.href;
    id = id.match(/meal-\d+/)[0];
    id = id.match(/\d+/)[0];
    let meal = this.findRecipe(id);
    let ingredients = [];
    for (let entry of Object.keys(meal)) {
      if (entry.includes('Ingredient') && meal[entry]) {
        let ingredientNumber = entry.split('strIngredient')[1];
        ingredients.push([meal[entry], meal[`strMeasure${ingredientNumber}`]]);
      }
    }
    console.log('ingredients', ingredients);
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
                <p className="card-text">Area: {meal.strArea}</p>
                <h5 className="card-title">Ingredients</h5>
                {ingredients.map((ingredient) => {
                  return (
                    <span>
                      - {ingredient[1]} {ingredient[0]} -
                    </span>
                  );
                })}

                <h5 className="card-title">Recipe</h5>
                <p className="card-text">{meal.strInstructions}</p>

                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    loading: true,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMeal: (id) => dispatch(singleMeal(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Meal);

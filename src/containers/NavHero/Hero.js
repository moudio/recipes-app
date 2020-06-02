import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, BrowserRouter as Route } from 'react-router-dom';
import './Hero.css';
import { selectRecipe } from '../../actions/actions';
import Filter from '../../components/Filter/Filter';

function Hero({ recipes, fetchRecipes }) {
  function onSubmit(event) {
    event.preventDefault();
  }

  function searchRecipes() {
    const search = document.querySelector('.search-input').value;
    fetchRecipes(search);
  }

  return (
    <Route>
      <div className="jumbotron">
        <h1 className="display-3">Recipes Made Simple</h1>
        <p className="lead">
          Discover unique way to prepare your next meal. Find unique recipes
          that suits your needs!
        </p>
        <form className="form-inline my-2 my-lg-0" onSubmit={onSubmit}>
          <input
            className="search-input form-control mr-sm-2"
            type="search"
            placeholder="Search Recipe"
          />
          <Link to="/results">
            <button
              className="btn btn-secondary my-2 my-sm-0"
              type="submit"
              onClick={() => searchRecipes()}
            >
              Search
            </button>
          </Link>
        </form>
        {recipes && recipes.length > 0 ? <Filter /> : ''}
        <hr className="my-4" />
      </div>
    </Route>
  );
}

Hero.propTypes = {
  recipes: Proptypes.arrayOf(
    Proptypes.shape({
      idMeal: Proptypes.string,
      strMeal: Proptypes.string,
    }),
  ).isRequired,
  fetchRecipes: Proptypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.name,
  recipes: state.recipes,
  oneMeal: false,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: (recipe) => dispatch(selectRecipe(recipe)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hero);

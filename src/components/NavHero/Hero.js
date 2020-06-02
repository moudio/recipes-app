import React from 'react';
import { connect } from 'react-redux';
import { Link, BrowserRouter as Route } from 'react-router-dom';
import './Hero.css';
import { selectRecipe } from '../../actions/actions';
import Filter from '../Filter/Filter';

class Hero extends React.Component {
  searchRecipes(element) {
    const search = document.querySelector('.search-input').value;
    this.props.fetchRecipes(search);
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    console.log(this.props);
    return (
      <Route>
        <div className="jumbotron">
          <h1 className="display-3">Recipes Made Simple</h1>
          <p className="lead">
            Discover unique way to prepare your next meal. Find unique recipes
            that suits your needs!
          </p>
          <form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
            <input
              className="search-input form-control mr-sm-2"
              type="search"
              placeholder="Search Recipe"
            />
            <Link to="/results">
              <button
                className="btn btn-secondary my-2 my-sm-0"
                type="submit"
                onClick={() => this.searchRecipes(this)}
              >
                Search
              </button>
            </Link>
          </form>
          {this.props.recipes
          && this.props.recipes.length > 0
          && !this.props.oneMeal ? (
            <Filter />
            ) : (
              ''
            )}
          <hr className="my-4" />
        </div>
      </Route>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.name,
  recipes: state.recipes,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: (recipe) => dispatch(selectRecipe(recipe)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hero);

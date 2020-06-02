import React, { useEffect } from 'react';
import Proptypes from 'prop-types';

import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Category from './Category';
import Meal from '../../components/Meal/Meal';
import './Categories.css';
import pizza from './category_pictures/pizza.jpeg';
import salad from './category_pictures/salad.jpeg';
import spinner from './category_pictures/spinner.gif';
import chicken from './category_pictures/chicken.jpeg';

function Categories({ isFetching, recipes }) {
  useEffect(() => {
    if (document.querySelector('.filter')) {
      document.querySelector('.filter').style.visibility = 'visible';
    }
  });
  if (isFetching) {
    return (
      <>
        <h2>Fetching Your Results...</h2>
        <div className="spinner">
          <img src={spinner} alt="spinner" />
        </div>
      </>
    );
  }
  if (!recipes) {
    return <h2>We could not find your request. Please try again</h2>;
  }
  if (!recipes.length) {
    return (
      <>
        <h2>Explore Our Categories</h2>
        <div className="categories">
          <Category
            name="Chicken"
            image={chicken}
            alt="chicken"
            search="chicken"
            description="Unique chicken-based meals just for you."
          />
          <Category
            name="Pizza"
            image={pizza}
            alt="pizza"
            search="pizza"
            description="Browse our pizza recipes selection"
          />
          <Category
            name="Salad"
            image={salad}
            alt="salad"
            search="salad"
            description="Want to prepare a delicious and healthy meal? Search our salad selection recipes!"
          />
        </div>
      </>
    );
  }
  if (recipes.length) {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/results">
              <h2>Your Search Results</h2>

              <div className="search-results">
                {recipes.map((meal) => (
                  <div className="card meal" key={meal.idMeal}>
                    <img
                      src={meal.strMealThumb}
                      className="card-img-top"
                      alt={meal.strMeal}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{meal.strMeal}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">{meal.strArea}</li>
                      <li className="list-group-item">{meal.strCategory}</li>
                    </ul>
                    <div className="card-body">
                      <Link to={`/meal-${meal.idMeal}`} className="card-link">
                        More Details
                      </Link>
                      <a
                        href={meal.strYoutube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                      >
                        View On Youtube
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Route>
            <Route path="/(meal-\d+)">
              <Meal />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
Categories.propTypes = {
  isFetching: Proptypes.bool.isRequired,
  recipes: Proptypes.arrayOf(
    Proptypes.shape({
      idMeal: Proptypes.string,
      strMeal: Proptypes.string,
    }),
  ),
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  isFetching: state.isFetching,
});

export default connect(mapStateToProps)(Categories);

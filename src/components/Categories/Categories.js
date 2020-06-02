import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Category from './Category';
import Meal from '../Meal/Meal';
import './Categories.css';
import dessert from './category_pictures/dessert.jpeg';
import pizza from './category_pictures/pizza.jpeg';
import salad from './category_pictures/salad.jpeg';
import spinner from './category_pictures/spinner.gif';

function Categories(props) {
  if (props.isFetching) {
    return (
      <>
        <h2>Fetching Your Results...</h2>
        <div className="spinner">
          <img src={spinner} alt="spinner" />
        </div>
      </>
    );
  } else if (!props.recipes) {
    return <h2>We couldn't find your request. Please try again</h2>;
  } else if (!props.recipes.length) {
    return (
      <>
        <h2>Explore Our Categories</h2>
        <div className="categories">
          <Category name="Dessert" image={dessert} alt="dessert" />
          <Category name="Pizza" image={pizza} alt="pizza" />
          <Category name="Salad" image={salad} alt="salad" />
        </div>
      </>
    );
  } else {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route exact path="/">
              <h2>Your Search Results</h2>

              <div className="search-results">
                {props.recipes.map((meal) => {
                  return (
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
                  );
                })}
              </div>
            </Route>
            <Route path="/(meal-\d+)">
              <Meal />
            </Route>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps)(Categories);

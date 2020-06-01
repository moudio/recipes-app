import React from 'react';
import { connect } from 'react-redux';
import Category from './Category';
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
      <>
        <h2>Your Search Results</h2>
        <div className="search-results">
          {props.recipes.map((meal) => {
            return (
              <div className="card meal">
                <img
                  src={meal.strMealThumb}
                  className="card-img-top"
                  alt={meal.idMeal}
                />
                <div className="card-body">
                  <h5 className="card-title">{meal.strMeal}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">str</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </>
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

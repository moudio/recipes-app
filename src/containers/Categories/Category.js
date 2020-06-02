import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import './Category.css';
import { selectRecipe } from '../../actions/actions';

function Category({
  name, alt, image, search, findRecipes,
}) {
  return (
    <Route>
      <div className="category card mb-3">
        <h3 className="card-header">{name}</h3>
        <img src={image} alt={alt} />
        <div className="card-body">
          <p className="card-text">
            {` Some quick example text to build on the card title and make up the
              bulk of the card's content.`}
          </p>
        </div>
        <div className="card-body">
          <Link
            to="/results"
            className="card-link"
            onClick={() => findRecipes(search)}
          >
            See More
          </Link>
        </div>
      </div>
    </Route>
  );
}

Category.propTypes = {
  name: Proptypes.string.isRequired,
  alt: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
  search: Proptypes.string.isRequired,
  findRecipes: Proptypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  findRecipes: (recipe) => dispatch(selectRecipe(recipe)),
});
export default connect(null, mapDispatchToProps)(Category);

import React from 'react';
import Proptypes from 'prop-types';
import './Filter.css';
import { connect } from 'react-redux';
import { FILTER } from '../../actions/actions';

function Filter({ filterByIngredient }) {
  function extractIngredient() {
    const { value } = document.querySelector('.filter');
    filterByIngredient(value);
  }
  return (
    <>
      <input
        className="filter"
        onChange={extractIngredient}
        type="text"
        placeholder="Filter By Ingredient"
      />
    </>
  );
}

Filter.propTypes = {
  filterByIngredient: Proptypes.func.isRequired,
};
const mapStateToProps = state => ({
  recipes: state.recipes,
});

const mapDispatchToProps = dispatch => ({
  filterByIngredient: ingredient => dispatch({
    type: FILTER,
    ingredient,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

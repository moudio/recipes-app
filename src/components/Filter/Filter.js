import React from 'react';
import './Filter.css';
import { connect } from 'react-redux';
import { FILTER } from '../../actions/actions';
function Filter(props) {
  function extractIngredient(e) {
    let value = document.querySelector('.filter').value;
    console.log('calling the filter with filter value ', value);
    props.filterByIngredient(value);
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
const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterByIngredient: (ingredient) =>
      dispatch({
        type: FILTER,
        ingredient: ingredient,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

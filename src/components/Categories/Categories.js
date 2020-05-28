import React from 'react';
import Category from './Category';
import './Categories.css';
import dessert from './category_pictures/dessert.jpeg';
import pizza from './category_pictures/pizza.jpeg';
import salad from './category_pictures/salad.jpeg';

function Categories() {
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
}

export default Categories;

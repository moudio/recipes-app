import React from 'react';
import './Category.css';

function Category(props) {
  return (
    <div className="category">
      <div className="card mb-3">
        <h3 className="card-header">{props.name}</h3>
        <img src={props.image} alt={props.alt} />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="card-body">
          <a href="#" className="card-link">
            See More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Category;

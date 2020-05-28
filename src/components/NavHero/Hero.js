import React from 'react';

function Hero() {
  return (
    <div className="jumbotron">
      <h1 className="display-3">Hello, world!</h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search Recipe"
        />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <hr className="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
    </div>
  );
}

export default Hero;

import React from 'react';
import 'bootswatch/dist/cyborg/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';

import NavHero from './containers/NavHero/NavHero';
import Categories from './containers/Categories/Categories';
import Footer from './containers/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavHero />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;

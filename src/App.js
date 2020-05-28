import React from 'react';
import 'bootswatch/dist/lux/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';

import NavHero from './components/NavHero/NavHero';
import Categories from './components/Categories/Categories';
function App() {
  return (
    <div className="App">
      <NavHero />
      <Categories />
    </div>
  );
}

export default App;

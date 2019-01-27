import React, { Component } from 'react';
import '../styles/index.css';

import SearchRecipes from './SearchRecipes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Recipe Finder</h1>
        <SearchRecipes />
      </div>
    );
  }
}

export default App;

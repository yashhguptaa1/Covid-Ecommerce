import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';

function App() {
  return (
    <div>
      {/* Switch gives us more control by ensuring only one component is rendered for a given two similar path */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={ShopPage} />
        <Route path='/mens' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
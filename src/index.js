import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';

import App from './components/App';
import FavoriteRecipeList from './components/FavoriteRecipeList';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()))


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/favorites' component={FavoriteRecipeList} />
      </Switch>
    </Router>
  </Provider>, document.getElementById('root'));

import React                   from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
}                              from 'react-router-dom';

import HomePage                from '../pages/HomePage';
import MovieDetailsPage        from '../pages/MovieDetailsPage';

export default (
  <Router>
    <Switch>
      <Route exact path="/"           component={HomePage} />
      <Route exact path="/movies/:id" component={MovieDetailsPage} />
    </Switch>
  </Router>
);

import React                   from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
}                              from 'react-router-dom';

import HomePage                from '../pages/HomePage';
import MovieDetailsPage        from '../pages/MovieDetailsPage';
import Header                  from '../layouts/Header';

export default (
  <Router>
    <>
      <Header />
      <Switch>
        <Route exact path="/"     component={HomePage} />
        <Route path="/movies/:id" component={MovieDetailsPage} />
        <Redirect from="/:id" to="/movies/:id" />
      </Switch>
    </>
  </Router>
);

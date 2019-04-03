import React                   from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
}                              from 'react-router-dom';

import HomePage                from '../pages/HomePage';
import SearchResults           from '../pages/SearchResults';
import MovieDetailsPage        from '../pages/MovieDetailsPage';
import Header                  from '../layouts/Header';

export default (
  <Router>
    <>
      <Header />
      <Switch>
        <Route exact path="/"       component={HomePage} />
        <Route exact path="/search" component={SearchResults} />
        <Route path="/movies/:id"   component={MovieDetailsPage} />
        <Redirect from="/:id" to="/movies/:id" />
      </Switch>
    </>
  </Router>
);

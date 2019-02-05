import React                   from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
}                              from 'react-router-dom';

import HomePage                from '../pages/HomePage';

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </Router>
);
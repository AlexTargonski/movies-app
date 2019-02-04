import React                   from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
}                              from 'react-router-dom';

import HomePage                from '../HomePage';

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </Router>
);

import React from 'react';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';
import { history } from './store.js';
import App from './components/App.jsx';
export const renderRoutes = () => (
  <Router history={history}>
    <Route path="/" component={App}>
    </Route>
  </Router>
)

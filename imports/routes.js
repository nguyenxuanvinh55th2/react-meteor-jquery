import React from 'react';
import { Router, Route,IndexRoute } from 'react-router';
import App from './components/App.jsx';
import About from './components/About.jsx';
import { history } from './store.js';
export const renderRoutes = () => (
  <Router history={history}>
    <div>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
    </div>
  </Router>
)

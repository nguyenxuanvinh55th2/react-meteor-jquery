import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import About from './components/home/About.jsx';
import Home from './components/home/Home.jsx';
import { history } from './store.js';
export const renderRoutes = () => (
  <Router history={history}>
    <Route path="/" component={App} >
      <IndexRoute component={Home}/>
      <Route  path="/about" component={About}/>
    </Route>
  </Router>
)

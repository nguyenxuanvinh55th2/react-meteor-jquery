import rootReducer from './reducers';
import { createStore, applyMiddleware} from 'redux';

import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
export const history = createHistory();
const middleware = routerMiddleware(history);
const defaultState = {
  users: {}
}

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
export default store;

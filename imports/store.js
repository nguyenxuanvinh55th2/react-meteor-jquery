import rootReducer from './reducers';
import { client } from './apollo-client.js';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {routerReducer, syncHistoryWithStore} from 'react-router-redux';
import { browserHistory} from 'react-router';
import { createBrowserHistory } from 'history';
const defaultState = {
  users: {}
}

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(thunk),
  compose(
      window.devToolsExtension ? window.devToolsExtension(): f => f
));
export const history = syncHistoryWithStore(createBrowserHistory(), store);
// export const history = createBrowserHistory();
export default store;

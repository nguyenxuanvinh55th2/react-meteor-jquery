import rootReducer from './reducers';
import { createStore, applyMiddleware, compose} from 'redux';
import {routerReducer, syncHistoryWithStore} from 'react-router-redux';
import { browserHistory} from 'react-router';
import thunk from 'redux-thunk';
const defaultState = {
  users: {}
}

const store = createStore(
  rootReducer,
  defaultState,
  compose(
      window.devToolsExtension ? window.devToolsExtension(): f => f
  )
);
export const history = syncHistoryWithStore(browserHistory, store);
export default store;

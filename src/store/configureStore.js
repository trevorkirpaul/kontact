import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import auth from '../reducers/auth';
import contacts from '../reducers/Contacts';
import status from '../reducers/status';
import filters from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth,
      contacts,
      status,
      filters,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};

import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import artistsReducer from '../reducers/artistsReducer';
import recordsReducer from '../reducers/recordsReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  artistsReducer,
  recordsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

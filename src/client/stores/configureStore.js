import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { createBrowserHistory  } from 'history';
import { routerMiddleware } from 'connected-react-router'
import rootReducer from '../reducers/index';

const logger = createLogger();
const history = createBrowserHistory();

export default function configureStore(initialState) {
  return createStore(
    rootReducer(history), // root reducer with router state
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk
        // ... other middlewares ...
      ),
    ),
  )
}
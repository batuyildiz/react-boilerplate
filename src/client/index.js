import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, IndexRoute } from 'react-router';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from './stores/configureStore';
import Home from './components/Home';


const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Route path="/" component={Home} />
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
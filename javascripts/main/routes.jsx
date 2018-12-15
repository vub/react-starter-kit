import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  withRouter,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import {
  initBackground,
  BackgroundComponent,
} from './background';

import CommonApp from '../components/CommonApp';
import store from './store';

const history = createBrowserHistory();

const routes = [
  {
    hidden: false,
    path: '/background',
    name: 'Background',
    exact: true,
    icon: 'person',
    initFunc: initBackground,
    component: BackgroundComponent,
  }
];

function App() {
  return (
    <CommonApp
      routes={routes}
      history={history}
    />
  );
}

App.propTypes = {};

const AppComponent = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <AppComponent />
    </Router>
  </Provider>,
  document.getElementById('dashboard-content'),
);

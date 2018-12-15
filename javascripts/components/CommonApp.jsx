import pathToRegex from 'path-to-regexp/index';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
// import CommonLoading from './common-loading';
// import CommonAlert from './common-alert';
// import CommonConfirmation from './common-confirmation';
import Sidebar from './CommonSidebar';
import MainPanel from './MainPanel';

function CommonApp(props) {
  const {
    routes, history, logo,
  } = props;

  function isEqual(path, currentPath = history.location.pathname) {
    const regex = pathToRegex(path);
    return regex.test(currentPath);
  }

  function getActiveClass(path) {
    let currentRoute = _.find(routes, r => isEqual(r.path));
    if (!currentRoute) {
      return '';
    }

    const inputRoute = _.find(routes, r => r.path === path);
    if (inputRoute.hidden) {
      return '';
    }

    if (inputRoute.path === currentRoute.path) {
      return 'active';
    }

    const findFunc = r => r.path === currentRoute.parent;
    while (currentRoute.parent) {
      const parent = _.find(routes, findFunc);
      if (!parent.hidden && inputRoute.path === parent.path) {
        return 'active';
      }
      currentRoute = parent;
    }
    return '';
  }

  const menus = _.compact(
    _.map(routes, (route, index) => {
      if (route.hidden) {
        return false;
      }
      return (
        <li className={`nav-item ${getActiveClass(route.path)}`} key={index}>
          <Link to={route.path} className="nav-link">
            <i className="material-icons">
              {route.icon}
            </i>
            <p>
              {route.name}
            </p>
          </Link>
        </li>
      );
    }),
  );

  return (
    <div>
      <Sidebar menus={menus} logo={logo} />
      <Switch>
        {_.map(routes, (route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={() => {
              if (route.initFunc) {
                route.initFunc(route);
              }
              const Component = route.component;
              return (
                <MainPanel menuTitle={route.name}>
                  <Component />
                </MainPanel>
              );
            }}
          />
        ))}
        {
          routes.length > 0 && (
            <Redirect to={routes[0].path} />
          )
        }
      </Switch>

      {/* <CommonAlert />
      <CommonConfirmation />
      <CommonLoading /> */}
    </div>
  );
}

CommonApp.defaultProps = {
  logo: 'dashboard',
};

CommonApp.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  history: PropTypes.shape().isRequired,
  logo: PropTypes.string,
};

export default CommonApp;

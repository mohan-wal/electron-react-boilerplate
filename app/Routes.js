/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import LandindPage from './components/landing/landing'

export default () => (
  <App>
    <Switch>
      {/* <Route path={routes.COUNTER} component={CounterPage} />
      <Route path={routes.HOME} component={HomePage} /> */}
      <Route path={routes.LANDING} component={LandindPage} />
    </Switch>
  </App>
);

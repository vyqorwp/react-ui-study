/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { SiteUrls } from '../../utils/urls/site';
import MainPage from '../MainPage';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div className="main-content">
        <Switch>
          <Route
            exact
            path={SiteUrls.Main}
            name="Main Page"
            component={MainPage}
          />
          <Redirect to={SiteUrls.Main} />
        </Switch>
      </div>
    );
  }
}

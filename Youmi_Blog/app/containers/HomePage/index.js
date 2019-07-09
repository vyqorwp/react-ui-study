import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { SiteUrls } from '../../utils/urls/site';
import { MainPage } from '../MainPage';
import { Table } from '../TablePage';
import { D3Page } from '../D3Page/D3Page';
import Card from '../CardPage/CardPage';
/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    console.log(11, this.props);
    return (
      <div className="main-content">
        <Switch>
          <Route
            exact
            path={SiteUrls.Main}
            name="Main Page"
            component={MainPage}
          />
          <Route
            exact
            path={SiteUrls.D3}
            name="D3 Examples"
            component={D3Page}
          />
          <Route
            exact
            path={SiteUrls.Table}
            name="Table Examples"
            component={Table}
          />
          <Route
            exact
            path={SiteUrls.Card}
            name="Card Examples"
            component={Card}
          />
          <Redirect to={SiteUrls.Main} />
        </Switch>
      </div>
    );
  }
}

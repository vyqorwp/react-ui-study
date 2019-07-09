/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { push } from 'connected-react-router';
import Banner from '../../components/Banner/Banner';
import { SiteUrls } from '../../utils/urls/site';
// eslint-disable-next-line react/prefer-stateless-function
export const MainPage = () => {
  // const gotoD3 = () => push(SiteUrls.D3);
  // const gotoTable = () => push(SiteUrls.Table);
  // const gotoCard = () => push(SiteUrls.Card);
  return (
    <Container>
      <div className="main">
        <Banner title="HELLO" subTitle="" />
        <div className="link-group">
          <a className="link-button" href={SiteUrls.D3}>
            D3
          </a>
          <a className="link-button" href={SiteUrls.Table}>
            Table
          </a>
          <a className="link-button" href={SiteUrls.Card}>
            Card
          </a>
        </div>
      </div>
    </Container>
  );
};

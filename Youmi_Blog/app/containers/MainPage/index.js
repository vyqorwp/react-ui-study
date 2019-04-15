import React from 'react';
import Banner from '../../components/Banner/Banner';

// eslint-disable-next-line react/prefer-stateless-function
class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Banner title="HELLO" subTitle="Welcome to Youmi' s Blog" />
      </div>
    );
  }
}
export default MainPage;

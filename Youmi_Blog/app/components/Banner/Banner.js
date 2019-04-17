import React from 'react';
import * as PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
class Banner extends React.Component {
  render() {
    const { title, subTitle } = this.props;
    return (
      <div className="banner-area">
        <div className="main-title">{title}</div>
        <span>{subTitle}</span>
      </div>
    );
  }
}
Banner.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default Banner;

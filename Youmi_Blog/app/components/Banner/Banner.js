import React from 'react';
export default class Banner extends React.Component {
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

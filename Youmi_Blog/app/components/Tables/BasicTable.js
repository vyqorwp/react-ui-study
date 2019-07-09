import React from 'react';
import * as PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
class BasicTable extends React.Component {
  render() {
    const {
      data,
      coloumns,
      option: { color, striped, bordered, hovered, responsive },
    } = this.props;
    const tableHead = () => {
      let tr = <tr/>;
      let th = [];
      columns.map(item => {
        th.push(<th>item.name</th>)
      })
      return (<thead><tr>{th}</tr></thead>)
    };
    return <div />;
  }
}
BasicTable.propTypes = {
  data: PropTypes.Array,
  columns: PropTypes.Array,
};
export default BasicTable;

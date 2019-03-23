import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import MenuBar from '../../components/MenuBar/MenuBar';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <MenuBar>Auth Client</MenuBar>
        <main>{children}</main>
      </Fragment>
    );
  }
}

// Layout.prototype = {
//   children: PropTypes.element.isRequired
// };

export default Layout;

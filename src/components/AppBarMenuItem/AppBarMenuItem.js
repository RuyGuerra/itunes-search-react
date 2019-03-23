import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { withRouter } from 'react-router';
import Link from '@material-ui/core/Link';

const muiStyles = theme => ({
  menuItem: {
    color: theme.palette.common.white
  }
});

class AppBarMenuItem extends Component {
  handleClick = () => {
    const { path, history, location } = this.props;
    history.push(path);
    console.log(location, path);
  };

  render() {
    const { children, classes, path, location } = this.props;
    return (
      <MenuItem
        className={classes.menuItem}
        selected={location.pathname === path}
        onClick={this.handleClick}
      >
        {children.toUpperCase()}
      </MenuItem>
      //   <MenuItem
      //   selected
      //   className={classes.menuItem}
      //   onClick={this.handleClick}
      // >
      //   {children.toUpperCase()}
      // </MenuItem>
    );
  }
}

export default compose(
  withRouter,
  withStyles(muiStyles)
)(AppBarMenuItem);

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Search from '../Search/Search';
import MenuButton from '../MenuButton/MenuButton';
import Grow from '../Grow/Grow';
import MenubarButton from '../MenuBarButton/MenuBarButton';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { movieSearch } from '../../store/actions';
import { withRouter } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Menu from '@material-ui/core/Menu';
import AppBarMenuItem from '../AppBarMenuItem/AppBarMenuItem';

const muiStyles = theme => ({
  container: {
    width: '100%'
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  menuItem: {
    color: theme.palette.common.white
    // '&:focus': {
    //   backgroundColor: theme.palette.primary.main,
    //   '& $primary, & $icon': {
    //     color: theme.palette.common.white,
    //   },
    // },
  }
});

class MenuBar extends Component {
  handleSearch = term => {
    const { movieSearch, history } = this.props;
    movieSearch(term);
    history.push('/page-movie');
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <AppBar position="static">
          <Toolbar>
            <MenuButton />
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              ITUNES SEARCH
            </Typography>
            <Grow />
            <AppBarMenuItem path="/">Home</AppBarMenuItem>
            <AppBarMenuItem path="/movies">Movies</AppBarMenuItem>
            <AppBarMenuItem path="/celebs">Celebs</AppBarMenuItem>
            {/* <MenubarButton selected path="/shows">
              Shows
            </MenubarButton>
            <MenubarButton path="/celebs">Celebs</MenubarButton> */}
            <Search onSearch={this.handleSearch} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default compose(
  withStyles(muiStyles),
  withRouter,
  connect(
    null,
    { movieSearch }
  )
)(MenuBar);

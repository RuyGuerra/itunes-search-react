import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './MenuButton.module.scss';

const { menuButton } = styles;

const MenuButton = () => {
  return (
    <Hidden smUp>
      <IconButton
        className={menuButton}
        color="inherit"
        aria-label="Open drawer"
      >
        <MenuIcon />
      </IconButton>
    </Hidden>
  );
};

export default MenuButton;

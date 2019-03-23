import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import styles from './Spinner.module.scss';

const muiStyles = theme => ({
  progress: {
    margin: theme.spacing.unit * 4
  }
});

const { progress } = muiStyles;

const { container } = styles;

const Spinner = ({ classes }) => {
  return (
    <div className={container}>
      <CircularProgress className={progress} color="secondary" />
    </div>
  );
};

Spinner.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(muiStyles)(Spinner);

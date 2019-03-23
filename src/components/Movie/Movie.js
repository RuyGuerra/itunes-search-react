import React, { Component } from 'react';
import styles from './Movie.module.scss';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const ELEVATION_MOUSE_OVER = 6;
const ELEVATION_MOUSE_OUT = 2;
const { title, imageStyle } = styles;

const muiStyles = theme => ({
  root: {
    backgroundColor: '#1e85a5',
    cursor: 'pointer'
    // ...theme.mixins.gutters()
    // paddingTop: theme.spacing.unit * 2,
    // paddingBottom: theme.spacing.unit * 2
  }
});

class Movie extends Component {
  state = {
    elevation: 2
  };

  mouseOverHandler = () => {
    this.setState({ elevation: ELEVATION_MOUSE_OVER });
  };

  mouseOutHandler = () => {
    this.setState({ elevation: ELEVATION_MOUSE_OUT });
  };

  render() {
    const { movie, classes } = this.props;

    const image = movie.image ? (
      <img className={imageStyle} src={movie.image} alt={movie.title} />
    ) : null;

    return (
      <Link to={`/page-movie/${movie.id}`}>
        <Paper
          onMouseOver={this.mouseOverHandler}
          onMouseOut={this.mouseOutHandler}
          className={classes.root}
          elevation={this.state.elevation}
        >
          <div className={title}>{movie.title}</div>
          {image}
        </Paper>
      </Link>
    );
  }
}

export default withStyles(muiStyles)(Movie);

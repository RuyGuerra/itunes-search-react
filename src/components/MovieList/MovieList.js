import React, { Component } from 'react';
import styles from './MovieList.module.scss';
import withSpinner from '../../hocs/withLoading';
import { connect } from 'react-redux';
import Movie from '../Movie/Movie';

const { container } = styles;

class MovieList extends Component {
  onMouseOverHandler = () => {
    console.log('onMouseOverHandler');
  };

  render() {
    const { movies } = this.props;

    return (
      <div className={container}>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movieSearch.movies,
    isFetching: state.movieSearch.isFetching
  };
};

export default connect(mapStateToProps)(withSpinner(MovieList));

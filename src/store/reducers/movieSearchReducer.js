import {
  MOVIE_SEARCH_REQUESTED,
  MOVIE_SEARCH_SUCCEED,
  MOVIE_SEARCH_FAILED
} from '../actions/actionTypes';

const initialState = {
  term: '',
  movies: [],
  error: '',
  isFetching: false
};

const movieSearch = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_SEARCH_REQUESTED:
      console.log(action.type);
      return {
        ...state,
        term: action.payload.term,
        isFetching: true
      };

    case MOVIE_SEARCH_SUCCEED:
      console.log(action.type);
      return {
        ...state,
        movies: action.payload.movies,
        isFetching: false
      };

    case MOVIE_SEARCH_FAILED:
      console.log(action.type);
      return {
        ...state,
        error: action.payload.error,
        isFetching: false
      };

    default:
      return state;
  }
};

export default movieSearch;

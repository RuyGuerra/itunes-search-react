import {
  MOVIE_SEARCH_REQUESTED,
  MOVIE_SEARCH_SUCCEED,
  MOVIE_SEARCH_FAILED
} from './actionTypes';
import { getMovies } from '../../services/api';

// export const fetchPosts = term => {
//   return async dispatch => {
//     dispatch(fetchPostsRequest(term));
//     const url = `${API_BASE}/${term}.json`;
//     try {
//       const response = await axios.get(url);
//       const items = response.data.data.children;
//       dispatch(fetchPostsSuccess(term, items));
//     } catch (error) {
//       dispatch(fetchPostsFailure(error.message));
//     }
//   };
// };

export const movieSearch = term => async dispatch => {
  dispatch(movieSearchRequested(term));
  console.log('term: ', term);
  try {
    const response = await getMovies(term);
    const moviesData = response.data.results;
    const movies = moviesData.map(movie => ({
      title: movie.trackName,
      country: movie.country,
      image: movie.artworkUrl60.match(/.*\//)[0] + '600x600bb.jpg',
      artistName: movie.artistName,
      description: movie.longDescription,
      id: movie.trackId
    }));
    console.log(movies);
    dispatch(movieSearchSucceed(movies));
  } catch (error) {
    console.log(error);
    dispatch(movieSearchFailed(error.message));
  }
};

export const movieSearchRequested = term => {
  return {
    type: MOVIE_SEARCH_REQUESTED,
    payload: { term }
  };
};

export const movieSearchSucceed = movies => {
  return {
    type: MOVIE_SEARCH_SUCCEED,
    payload: { movies }
  };
};

export const movieSearchFailed = error => {
  return {
    type: MOVIE_SEARCH_FAILED,
    payload: { error }
  };
};

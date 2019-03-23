import axios from 'axios';
// import { delay } from 'redux-saga';

// const API_ROOT = 'http://api.tvmaze.com/';

// const getMovies = term => {
//   const url = `${API_ROOT}/search/shows?q=${term}`;
//   return axios.get(url);
//   // return delay(3000);
// };

const API_ROOT = 'https://itunes.apple.com';

const getMovies = term => {
  const url = `${API_ROOT}/search/media=movie&entity=movie&term=${term}`;
  console.log('URL: ', url);
  return axios.get(url);
};

export {
  getMovies
};

import { combineReducers } from 'redux';
import movieSearch from './movieSearchReducer';

const rootReducer = combineReducers({
  movieSearch
});

export default rootReducer;

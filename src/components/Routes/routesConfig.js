import Home from '../Home/Home';
import PageMovie from '../PageMovie/PageMovie';
import Movies from '../Movies/Movies';
import Celebs from '../Celebs/Celebs';
import MovieDetail from '../MovieDetail/MovieDetail';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true,
    Icon: 'HomeIcon'
  },
  {
    path: '/page-movie',
    name: 'PageMovie',
    component: PageMovie,
    exact: true,
    Icon: 'HomeIcon'
  },
  {
    path: '/page-movie/:id',
    name: 'Movie Detail',
    component: MovieDetail,
    exact: false,
    Icon: 'HomeIcon'
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies,
    exact: false,
    Icon: 'sentiment_very_satisfied'
  },
  {
    path: '/celebs',
    name: 'Celebs',
    component: Celebs,
    exact: false,
    Icon: 'local_movies'
  }
];

export default routes;

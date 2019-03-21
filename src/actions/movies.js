import axios          from 'axios';

import { GET_MOVIES } from '../constants';

export function getMovies() {
  return function(dispatch) {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TOKEN}&language=en-US&page=1`)
      .then(res => {
        if (res.status === 200) {
          dispatch({ type: GET_MOVIES, payload: res.data.results });
        }
      })
      .catch(err => {
        console.error("error: ", err);
      })
  }
}

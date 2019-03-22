import axios         from 'axios';

import { GET_MOVIE } from '../constants';

export function getMovie(id) {
  return function(dispatch) {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TOKEN}&language=en-US`)
      .then(res => {
        if (res.status === 200) {
          dispatch({ type: GET_MOVIE, payload: res.data });
        }
      })
      .catch(err => {
        console.error("error: ", err);
      })
  }
}

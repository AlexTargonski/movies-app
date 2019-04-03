import axios              from 'axios';

import {
  GET_MOVIES,
  GET_RECOMMENDED_MOVIES,
  FIND_MOVIES,
}                         from '../constants';

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

export function getRecommendedMovies(id) {
  return function(dispatch) {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TOKEN}&language=en-US&page=1`)
      .then(res => {
        if (res.status === 200) {
          dispatch({ type: GET_RECOMMENDED_MOVIES, payload: res.data.results });
        }
      })
      .catch(err => {
        console.error("error: ", err);
      })
  }
}

export function findMovies(query) {
  return function(dispatch) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TOKEN}&language=en-US&query=${query}&page=1&include_adult=false`)
      .then(res => {
        if (res.status === 200) {
          dispatch({ type: FIND_MOVIES, payload: res.data.results });
        }
      })
      .catch(err => {
        console.error("error: ", err);
      })
  }
}

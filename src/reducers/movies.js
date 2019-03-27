import {
  GET_MOVIES,
  GET_RECOMMENDED_MOVIES,
  FIND_MOVIES,
}                         from '../constants';

export default function movies(state = [], action) {

  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies : action.payload
      };

    case GET_RECOMMENDED_MOVIES:
      return {
        ...state,
        movies : action.payload
      };

    case FIND_MOVIES:
      return {
        ...state,
        movies : action.payload
      };

    default:
      return state;
  }
}

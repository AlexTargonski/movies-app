import { GET_MOVIE } from '../constants';

export default function movie(state = {}, action) {

  switch (action.type) {
    case GET_MOVIE:
    return {
      ...state,
      movie : action.payload
    };

    default:
      return state;
  }
}

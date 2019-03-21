import { GET_MOVIES } from '../constants';

export default function tasks(state = [], action) {

  switch (action.type) {
    case GET_MOVIES:
    return {
      ...state,
      movies : action.payload
    };

    default:
      return state;
  }
}

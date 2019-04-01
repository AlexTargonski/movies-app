import { FIND_MOVIES } from '../constants';

export default function search(state = [], action) {

  switch (action.type) {
    case FIND_MOVIES:
      return {
        ...state,
        search : action.payload
      };

    default:
      return state;
  }
}

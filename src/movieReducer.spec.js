import movie         from './reducers/movie';
import { GET_MOVIE } from './constants';

test('returns default initial state of {}', () => {
  const newState = movie(undefined, {});
  expect(newState).toEqual({});
});

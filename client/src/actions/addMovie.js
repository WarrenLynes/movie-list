import { addMovie, searchMovies } from '../util/api.js';
import { handleFetchLists } from './lists';

export function handleSearchMovies(query) {
  return (dispatch) => {
    // dispatch(showLoading());
    const results = searchMovies(query)
      .then((results) => {
        console.log(results);
        dispatch(receiveResults(results))
      });
  }
}

export function handleAddMovie(movieId) {
  return (dispatch, getState) => {
    // dispatch(showLoading());

    const { auth, lists } = getState();

    const results = addMovie(auth, lists.list, movieId)
      .then(() => {
        dispatch(onSelection())
        dispatch(handleFetchLists())
      });
  }
}

export function receiveResults(results) {
  return {
    type: 'RECEIVE_RESULTS',
    results,
  }
}

export function onSelection() {
  return {
    type: 'ON_SELECTION'
  }
}
export default function addMovie(state = {}, action) {
  switch (action.type) {
    case 'SET_SEARCH':
      return {
        ...state,
        ...action.search
      }
    case 'RECEIVE_RESULTS':
      return {
        ...state,
        results: action.results
      }
    case 'ON_SELECTION':
      return {}
    default:
      return state
  }
}
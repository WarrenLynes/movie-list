import { fetchLists } from '../util/api.js';
export function handleFetchLists() {
  return (dispatch, store) => {
    // dispatch(showLoading());

    const { auth } = store();
    return fetchLists(auth)
      .then((lists) => {
        dispatch(receiveLists(lists))
        dispatch(setList(Object.keys(lists)[0]));
      });
  }
}

export function receiveLists(lists) {
  return {
    type: 'RECEIVE_LISTS',
    lists,
  }
}

export function setList(list) {
  console.log(list);
  return {
    type: 'SET_LIST',
    list
  }
}
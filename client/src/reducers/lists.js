export default function lists(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_LISTS':
      return {
        ...state,
        lists: {
          ...state.lists,
          ...action.lists
        },
      }
    case 'SET_LIST':
      return {
        ...state,
        list: action.list
      }
    default:
      return {
        lists: {},
        list: null,
        ...state
      }
  }
}

export default function auth(state = {}, action) {
  console.log(action)
  switch (action.type) {
    case 'AUTHENTICATE_SUCCESS':
      return {
        requestToken: action.requestToken,
        sessionId: action.sessionId,
      }
    default:
      return state
  }
}

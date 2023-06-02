
export function handleAuthSuccess(requestToken, sessionId) {
  return {
    type: 'AUTHENTICATE_SUCCESS',
    requestToken,
    sessionId,
  }
}
import Axios from 'Axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import { API_READ_KEY } from '/config.js';
import reducer from './reducers';
import middleware from './middleware';
import App from './components/App.jsx';

const store = createStore(
  reducer,
  middleware
);

function fetchRequestToken() {
  const url = 'https://api.themoviedb.org/3/authentication/token/new';
  const headers = {
    Authorization: 'Bearer ' + API_READ_KEY,
    accept: 'application/json'
  };
  Axios.get(url, {
    headers
  }).then((response) => {
    const token = response.data.request_token;
    window.location.href = 'https://www.themoviedb.org/authenticate/' + token + '?redirect_to=http://localhost:3000';
  });
}

function requestSessionId(request_token) {
  const url = 'https://api.themoviedb.org/3/authentication/session/new';
  return Axios.post(url, {
    "request_token": request_token
  }, {
    headers: {
      Authorization: 'Bearer ' + API_READ_KEY,
      accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).catch((err) => fetchRequestToken());
}

async function init(cb) {
  const params = new URLSearchParams(document.location.search);
  const requestToken = params.get('request_token');
  const approved = params.get('approved');
  if (!requestToken && !approved) {
    return fetchRequestToken();
  } else if (requestToken && approved) {
    const response = await requestSessionId(requestToken);
    const sessionId = response.data.session_id;

    cb(requestToken, sessionId);
  }
}

init((requestToken, sessionId) => {
  ReactDOM.render(
    <Provider store={store}>
      <App requestToken={requestToken} sessionId={sessionId} />
    </Provider>,
    document.getElementById('app')
  )
});
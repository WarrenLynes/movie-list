import Axios from 'Axios'
import { ACCOUNT_ID, API_READ_KEY } from '/config.js';

const BASE_URL = 'https://api.themoviedb.org/3';

const fetch = async (endpoint, headers = {}, params = {}) => {
  return await Axios.get(BASE_URL + endpoint, {
    params,
    headers: {
      'Authorization': 'Bearer ' + API_READ_KEY,
      ...headers
    }
  });
};

function formatData(data) {
  const res = {};
  data.forEach((i) =>
    res[i.id] = i
  );

  return res;
}

function fetchAccountLists(sessionId) {
  const url = '/account/' + ACCOUNT_ID + '/lists'
  const headers = {}
  const params = { page: '1', session_id: sessionId }
  return fetch(url, headers, params)
}

export const fetchLists = async ({ sessionId }) => {
  const accountLists = await fetchAccountLists(sessionId);

  return Promise.all(
    accountLists.data.results.map((x) =>
      fetch('/list/' + x.id)
        .then(({ data }) => data))
  ).then((res) => {
    return formatData(res);
  })
};

export const searchMovies = (query) => {
  const url = `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  const headers = {}
  const params = {}
  return fetch(url, headers, params)
    .then(({ data }) =>
      formatData(data.results)
    );
};

export const addMovie = async ({ sessionId }, list, movieId) => {
  const endpoint = `/list/${list}/add_item?session_id=${sessionId}`
  const headers = {
    accept: 'application/json',
    'content-type': 'application/json',
    Authorization: 'Bearer ' + API_READ_KEY
  }
  const data = JSON.stringify({ media_id: movieId });
  const params = {}
  const res = await Axios.post(BASE_URL + endpoint, data, {
    params,
    headers
  });
  return res;
}

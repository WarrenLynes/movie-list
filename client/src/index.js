import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const MOVIES = [
  { title: 'Mean Girls', watched: true },
  { title: 'Hackers', watched: false },
  { title: 'The Grey', watched: false },
  { title: 'Sunshine', watched: false },
  { title: 'Ex Machina', watched: false },
];

ReactDOM.render(<App movieData={MOVIES} />, document.getElementById('app'));
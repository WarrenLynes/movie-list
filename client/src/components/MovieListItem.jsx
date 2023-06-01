import React from 'react';

const MovieListItem = ({ movie, onToggleMovie }) =>
  <div className="movie"  >
    {movie.title}
    <button onClick={() => onToggleMovie(movie, !movie.watched)}> {movie.watched ? 'Watched' : 'To Watch'} </button>
  </div>

export default MovieListItem;
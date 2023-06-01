import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MoviesList = ({ movies, onToggleMovie }) =>
  movies.length
    ? movies.map((movie) =>
      <MovieListItem movie={movie} onToggleMovie={onToggleMovie} key={movie.title} />
    )
    : <h4>no movie by that name found</h4>

export default MoviesList;
import React from 'react';

const MovieListItem = ({ movie, onToggleMovie }) =>
  <div className="movie" >
    <span>
      <img
        className="result-img result-img-sm"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="no picture"
      />
      <h5 className="movie-title">{movie.title}</h5>
    </span>
    <button onClick={() => onToggleMovie(movie, !movie.watched)}> {movie.watched ? 'Watched' : 'To Watch'} </button>
  </div>

export default MovieListItem;
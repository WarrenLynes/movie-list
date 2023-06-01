import React, { useState } from 'react';
import MoviesList from './MoviesList.jsx';
import Form from './Form.jsx';
import Search from './Search.jsx';



const App = ({ movieData }) => {
  const [moviesList, setMoviesList] = useState(movieData);
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState('');

  const handleSearchMovies = (q) => {
    setSearch(q);
  }

  const handleFilterMovies = (f) => {
    setFilter(f);
  }

  const handleAddMovie = (movie) =>
    setMoviesList([{ title: movie, watched: false }, ...moviesList])

  const handleUpdateMovie = (movie, f) => {
    const list = moviesList.slice();
    for (var i = 0; i < list.length; i++) {
      if (list[i].title === movie.title) {
        list[i]['watched'] = f;
        setMoviesList(list);
        return;
      }
    }
  }

  const searchResults = moviesList.slice().filter(({ title, watched }) =>
    filter === watched && title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h1>Movie List</h1>

      <div className="container">
        <Form onSubmit={handleAddMovie} placeholder={'Add Movie'} verbage={'Add!'} />
        <Search filter={filter} onFilter={handleFilterMovies} onSubmit={handleSearchMovies} />
        <MoviesList movies={searchResults} onToggleMovie={handleUpdateMovie} />
      </div>
    </div>
  );
}

export default App;
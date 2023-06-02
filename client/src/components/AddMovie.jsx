import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { searchMovies } from '../util/api.js';
import { handleAddMovie, handleSearchMovies } from '../actions/addMovie.js';
import Form from './Form.jsx';

const AddMovie = () => {
  const { results } = useSelector((store) => store.addMovie);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const handleSelectSearchOption = (movieId) => {
    dispatch(handleAddMovie(movieId));
  };

  const handleSubmitSearch = (query) => {
    setSearch(query);
  };

  useEffect(() => {
    if (!search.length)
      return;

    dispatch(handleSearchMovies(search))
  }, [search]);

  console.log(results);
  const searchResults = results
    ? Object.values(results).slice(((page - 1) * 5), page * 5)
    : [];

  return (
    <div className="container">

      <Form
        onSubmit={handleSubmitSearch}
        placeholder={'Add Movie'}
        verbage={'Add!'}
      />

      {searchResults.length > 0 && (
        <div className="container results-row">
          <button onClick={() => setPage(page - 1)}> last </button>
          {
            searchResults.map((res) => (
              <img
                className="result-img"
                onClick={() => handleSelectSearchOption(res.id)}
                src={`https://image.tmdb.org/t/p/w500/${res.poster_path}`}
                alt="no picture"
              />
            ))
          }
          <button onClick={() => setPage(page + 1)}> next </button>
        </div>
      )}
    </div>
  )
};

export default AddMovie;
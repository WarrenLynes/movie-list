import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { handleFetchLists, setList } from '../actions/lists.js';
import { handleAuthSuccess } from '../actions/auth.js';
import { fetchLists } from '../util/api.js';
import AddMovie from './AddMovie.jsx';
import MovieLists from './MovieLists.jsx';
import MoviesList from './MoviesList.jsx';
import Form from './Form.jsx';
import Search from './Search.jsx';

const MOVIES = [
  { title: 'Mean Girls', watched: true },
  { title: 'Hackers', watched: false },
  { title: 'The Grey', watched: false },
  { title: 'Sunshine', watched: false },
  { title: 'Ex Machina', watched: false },
];


const App = ({ movieData, requestToken, sessionId }) => {
  const { lists, list } = useSelector((store) => store.lists);
  const dispatch = useDispatch();
  const [moviesList, setMoviesList] = useState(MOVIES);
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState('');

  const handleSearchMovies = (q) => {
    setSearch(q);
  }

  const handleSetList = (listId) => {
    dispatch(setList(listId));
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

  React.useEffect(() => {
    if (!requestToken || !sessionId)
      return;
    dispatch(handleAuthSuccess(requestToken, sessionId));
    dispatch(handleFetchLists())
  }, [dispatch]);

  const searchResults =
    lists && Object.keys(lists).length && list
      ? lists[list].items.filter(({ title }) =>
        title.toLowerCase().includes(search.toLowerCase())
      ) : [];

  const _lists = lists
    ? Object.values(lists)
    : [];

  return (
    <div>
      <h1>Movie List</h1>

      <div className="container">
        <div className="container">
          <AddMovie />
        </div>

        <Search onSubmit={handleSearchMovies}>
          {_lists && _lists.length && (
            <MovieLists
              lists={_lists}
              list={list}
              onSelect={handleSetList}
            />
          )}
        </Search>
        <MoviesList movies={searchResults} onToggleMovie={handleUpdateMovie} />
      </div>
    </div>
  );
}

export default App;
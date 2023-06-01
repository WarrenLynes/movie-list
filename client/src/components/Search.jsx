import React, { useState } from 'react';
import Form from './Form.jsx';

const Search = ({ filter, onFilter, onSubmit }) => {
  const [query, setQuery] = useState('');

  const updateQuery = ({ target }) => {
    setQuery(target.value)
  };

  const selectedStyle = {
    border: '2px solid green'
  };

  return (
    <div className="searchbox">
      <button onClick={() => onFilter(true)} style={filter ? selectedStyle : {}}> Watched </button>
      <button onClick={() => onFilter(false)} style={!filter ? selectedStyle : {}}> To Watch </button>
      <Form onSubmit={onSubmit} placeholder={'Search'} verbage={'Go!'} />
    </div>
  );
}

export default Search;
import React, { useState } from 'react';
import Form from './Form.jsx';

const Search = ({ onSubmit, children }) => {
  const [query, setQuery] = useState('');

  const updateQuery = ({ target }) => {
    setQuery(target.value)
  };

  return (
    <div className="searchbox" style={{ marginBottom: '15px' }}>
      {children}
      <Form onSubmit={onSubmit} placeholder={'Search'} verbage={'Go!'} />
    </div>
  );
}

export default Search;
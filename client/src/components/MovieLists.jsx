import React from 'react';

const MovieLists = ({ list, lists, onSelect }) => {
  const selectedStyle = {
    border: '2px solid green'
  };

  console.log(lists, list);
  return lists.map(({ id, name }) =>
    <button
      key={id}
      onClick={() => onSelect(id)}
      style={list === id ? selectedStyle : {}}
    > {name} </button>
  );
}

export default MovieLists;
import React, { useState } from 'react';

const Form = ({ onSubmit, placeholder, verbage }) => {
  const [input, setInput] = useState('');

  const updateQuery = ({ target }) => {
    setInput(target.value)
  };

  const handleSubmit = () => {
    onSubmit(input);
  }

  return (
    <div className="form">
      <input
        type="text"
        placeholder={placeholder}
        value={input}
        onChange={updateQuery}
      />
      <button onClick={handleSubmit} >
        {verbage}
      </button>
    </div>
  );
}

export default Form;
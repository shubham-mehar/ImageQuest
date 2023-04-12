import React, { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
  <form onSubmit={handleSubmit} className="form">
    <label className="form-label">Search for Images</label>
    <input type="text" placeholder="Enter your search query" className="form-control" defaultValue={query} onChange={(e)=> {setQuery(e.target.value)}} />
    <button type="submit" className="btn">Search</button>
  </form>

  );
}

export default SearchForm;
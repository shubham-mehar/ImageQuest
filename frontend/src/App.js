import React, { useState } from 'react';
import './Styles.css';
import SearchForm from './Components/SearchForm';
import ImageGrid from './Components/ImageGrid';

const  App=()=> {
  const [query, setQuery] = useState('');

  const handleSearch = (query) => {
    setQuery(query);
  };

  return (
      <div className="container">
        <SearchForm onSubmit={handleSearch} />
        {query && <ImageGrid query={query} />}
      </div>
  );
}

export default App;

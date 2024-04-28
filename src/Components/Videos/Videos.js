import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './Videos.css'; // Assuming you have a CSS file for this component

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    axios.get(`/search?term=${searchTerm}`)
      .then(response => {
        setSearchResults(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
        setError('An error occurred while fetching search results.');
        setLoading(false);
      });
  }, [searchTerm]);

  const handleSearch = () => {
    setSearchResults([]); // Clear previous search results
    // setSearchTerm(searchTerm.trim()); // Optionally, trim search term
  };

  return (
    <div className='hesearch'>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search here.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </button>
      </div>
      <div className="search-results">
        {loading && <p>Loading...</p>}
        {error && <p className="error-message">{error}</p>}
        {searchResults.length === 0 && !loading && !error && (
          <p className="no-results">No results found</p>
        )}
        {searchResults.length > 0 && (
          searchResults.map((result, index) => (
            <div className="search-result" key={index}>
              <h3 className="result-title">{result.title}</h3>
              <p className="result-description">{result.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Search;

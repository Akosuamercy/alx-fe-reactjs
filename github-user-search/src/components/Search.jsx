/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// GitHub API URL for user search
const API_URL = 'https://api.github.com/users/';

const Search = () => {
  // State variables
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle search input change
  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  // Fetch user data from GitHub API
  const handleSearch = async () => {
    if (!username) return; // If no username, do nothing

    setLoading(true); // Start loading
    setError(null); // Clear previous error
    setUserData(null); // Clear previous user data

    try {
      const response = await fetch(`${API_URL}${username}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      const data = await response.json();
      setUserData(data); // Update the state with user data
    } catch (err) {
      setError('Looks like we can’t find the user'); // Set error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        value={username}
        onChange={handleChange}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {userData && (
        <div>
          <h2>{userData.name || 'No Name Available'}</h2>
          <img src={userData.avatar_url} alt={userData.login} width={100} />
          <p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              Visit GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
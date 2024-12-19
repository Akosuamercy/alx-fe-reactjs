/* eslint-disable no-unused-vars */
import { useState } from 'react'; 
import githubService from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
      setLoading(false);
    } catch (error) {
      setError('Looks like we can\'t find the user');
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      {/* Conditional Rendering */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* Display user data if available */}
      {userData && !loading && !error && (
        <div>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            width="100"
            height="100"
            style={{ borderRadius: '50%' }}
          />
          <h3>{userData.name}</h3>
          <p>{userData.bio}</p>
          <p>{userData.location}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
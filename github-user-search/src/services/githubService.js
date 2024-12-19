// import axios from 'axios';
// const githubService = {
//   fetchUserData: async (username) => {
//     const response = await axios.get('https://api.github.com');
//     return response.data;
//   },
// };
// export default githubService;

import axios from 'axios';
const githubService = {
  fetchAdvancedUserData: async (query, location, minRepos) => {
    const url = `("https://api.github.com/search/users?q"):>=${minRepos}+${query}`;
    const response = await axios.get(url);
    return response.data;
  },
};

// GitHub Search API base URL
const GITHUB_SEARCH_API_URL = 'https://api.github.com/search/users';

/**
 * Constructs the query string based on the provided search parameters.
 * 
 * @param {string} username - The GitHub username to search for.
 * @param {string} location - The location to filter by (optional).
 * @param {string} minRepos - The minimum number of repositories to filter by (optional).
 * @returns {string} The formatted query string for the API request.
 */
const buildQuery = (username, location, minRepos) => {
  let query = `q=${username}`;

  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  return query;
};

/**
 * Fetches user data from GitHub based on the provided search criteria.
 * 
 * @param {string} username - The GitHub username to search for.
 * @param {string} location - The location to filter by (optional).
 * @param {string} minRepos - The minimum number of repositories to filter by (optional).
 * @returns {Promise<Object>} The search results or an error object.
 */
export const fetchUserData = async (username, location = '', minRepos = '') => {
  try {
    // Construct the search query
    const query = buildQuery(username, location, minRepos);

    // Make the GET request to the GitHub Search API
    const response = await axios.get(`${GITHUB_SEARCH_API_URL}?${query}`);

    // Return the list of users found in the response
    return response.data.items; // `items` contains the user results
  } catch (error) {
    // Handle errors (e.g., user not found, network error, etc.)
    console.error('Error fetching user data: ', error);
    throw new Error('User search failed');
  }
};
export default githubService;
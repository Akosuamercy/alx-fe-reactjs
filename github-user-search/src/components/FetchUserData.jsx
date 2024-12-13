/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

function FetchUserData() {
    const [searchTerm, setSearchTerm] = useState('');   // State to hold the search term input by the user
    const [userData, setUserData] = useState(null);      // State to hold the fetched data
    const [loading, setLoading] = useState(false);       // State to track loading status
    const [error, setError] = useState(null);            // State to hold any error messages

    // Function to fetch user data from GitHub API
    const fetchUserData = async (searchTerm) => {
        if (!searchTerm) return; // Don't fetch if the search term is empty
        setLoading(true);
        setError(null); // Reset any previous errors

        try {
            const response = await fetch(`https://api.github.com/search/users?q=${searchTerm}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            setUserData(data.items);  // GitHub returns user data in the 'items' field
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Run fetchUserData whenever the searchTerm changes
    useEffect(() => {
        fetchUserData(searchTerm);
    }, [searchTerm]);

    return (
        <div>
            <h1>GitHub User Search</h1>
            <input
                type="text"
                placeholder="Search GitHub users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {userData && userData.map((user) => (
                    <li key={user.id}>
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                            {user.login}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FetchUserData;

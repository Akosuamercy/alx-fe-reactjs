/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';

function Axios() {
    const apiUrl = 'https://api.github.com/users/{username'
    axios.get(apiUrl)
   .then(response => {
       console.log(response.data);
        // Display fetched data
   })
   .catch(error => {
       console.error('Error fetching data:', error);
   });

  return (
    <div>Axios</div>
  )
}

export default Axios;
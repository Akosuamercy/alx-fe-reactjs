import React from 'react'
import axios from 'axios';


function githubService() {
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
    <div>githubService</div>
  )
}

export default githubService;
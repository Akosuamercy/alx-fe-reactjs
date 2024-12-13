import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Search() {
    const [formData, setFormData] = useState({
      username: '',
      password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        alert('Details submitted!');
      };

      return (
        <div className='search-bar'>
        <div style={{ padding: '20px' }}></div>
          <h2>Github User Search</h2>
          <form onSubmit= {handleSubmit}>
            <input 
              type="text" 
              id="username" 
              placeholder="Github Username" required 
              value {formData.username}
              onChange={handleChange}
              style= {{ display: 'block', margin: '15px 0'}}
            />

            <input 
              type="password" 
              name="password" 
              placeholder="Your Password" required 
              value {password}
              onChange={handleChange}
              style= {{ display: 'block', margin: '15px 0'}}
            />
            <button type= "submit">Search</button>    
      </form>  
    </div>
    
  );
};


export default Search;
import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Search ({}) => {
  
  
    return (
      
    <div className='search-bar'>
      <form onSubmit= {handleSubmit}>
        <input type="text" id="username" placeholder="Github username" required onChange={handleChange} />
         <button type= "submit">Search</button>
         <div id="root"></div>
      </form>  
    </div>
    
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Search />)

export default Search;
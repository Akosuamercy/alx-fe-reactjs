import { useState } from 'react';

const Search = () => {
    const [formData, setFormData] = useState({ username: '' });

    const handleChange = (e) => {
        const { username, value } = e.target;
        setFormData(prevState => ({ ...prevState, [username]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
      <div>
        <h1>Github User Search</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={formData.name}
                onChange={handleChange}
                placeholder='search Github users'
            />
            <button type="submit">Submit</button>
        </form>
      </div>
    );
};

export default Search;
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export const RegistrationForm = () => {
 const [username, setUsername] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const [errors, setErrors] = useState({});

 const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };
  
 const validate = () => {
    const errors = {};
    if (!username) errors.username = 'Username is required';
    if (!email) errors.email = 'Email is required';
    if (!password) errors.password= 'Password is required';
          
    };

};

export default RegistrationForm
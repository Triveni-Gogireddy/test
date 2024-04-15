import React, { useState,useEffect } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname:'',
    address:'',
    mobilenumber:'',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const getusers = async () => {
    try {
      const response = await fetch('http://localhost:3001/users');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
 useEffect(()=>{
  getusers()
 })
  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Registration successful, handle the response accordingly
        console.log('Registration successful!');
   getusers(),alert('Registration successful!');
      } else {
        // Registration failed, handle the error
        console.error('Registration failed!');
      }
    } catch (error) {
      console.error('Error occurred during registration:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstname">FirstName:</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="lastname">LastName:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="firstname">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="firstname">Mobile:</label>
        <input
          type="text"
          id="mobilenumber"
          name="mobilenumber"
          value={formData.mobilenumber}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
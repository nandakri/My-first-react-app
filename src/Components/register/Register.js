import React, { useState } from 'react';
import './Register.css';
import { Routes, Route, Link } from "react-router-dom";
import Login from '../login/Login';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username.trim()) {
      alert('Username cannot be empty');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message); // Show success message
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
      } else {
        const errorData = await response.json();
        alert(errorData.error); // Show error message
      }
    } catch (error) {
      console.error('An error occurred during signup:', error);
      alert('An error occurred during signup. Please try again.'); // Show generic error message
    }
  };

  return (
    <div className='con1'>
      <div className="SignUpForm-container">
        <div>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label className="gf">Username:</label>
            <input
              type="text"
              name="username"
              className="le"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <br />
            <label className="gf">Email:</label>
            <input
              type="email"
              name="email"
              className="le"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <br />
            <label className="gf">Password:</label>
            <input
              type="password"
              name="password"
              className="le"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <br />
            <label className="gf">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              className="le"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <br />
            <button type="submit" id='b2'>Sign Up</button>
            <Link to='/Login'><button id='b1'>Login</button></Link>
          </form>
        </div>
      </div>
      <Routes>
        <Route path='login' element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default SignUpForm;

import React, { useState } from 'react';
import './Login.css';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Register from '../register/Register';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        window.alert(data.message); // Show success message
        setLoginData({
          email: '',
          password: '',
        });
        // Redirect to the home page after successful login
        navigate('/home');
      } else {
        const errorData = await response.json();
        window.alert(errorData.error); // Show error message
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      window.alert('An error occurred during login. Please try again.'); // Show generic error message
    }
  };

  return (
    <div className='con1'>
      <div className="LoginForm-container">
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label className="gf">Email:</label>
            <input
              type="email"
              name="email"
              className="le"
              value={loginData.email}
              onChange={handleChange}
              required
            />
            <br />
            <label className="gf">Password:</label>
            <input
              type="password"
              name="password"
              className="le"
              value={loginData.password}
              onChange={handleChange}
              required
            />
            <br />
            <button type="submit" id='b1'>Login</button>
            <p id='p1'>IF YOU DON'T HAVE AN ACCOUNT. SIGN UP HERE</p>
            <Link to='/register'><button id='b1'>Signup</button></Link>
          </form>
        </div>
      </div>
      <Routes>
        <Route path='/register' element={<Register />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
};

export default Login;

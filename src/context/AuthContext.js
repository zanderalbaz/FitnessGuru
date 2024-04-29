import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

// FOR MOR INFORMATION:
//
// https://legacy.reactjs.org/docs/context.html
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['logged-in']);

  useEffect(() => {
    const token = cookies['logged-in']; 
    if (token) {
      setLoggedIn(true);
    }
  }, [cookies]);
  

  const login = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/user/login', {
        username,
        password,
      });
      setCookie('logged-in', response.data.token, { expires: new Date(Date.now() + 5 * 60 * 1000) }); // exp time is 5 mins
      setLoggedIn(true);
      console.log('Login successful.');
      navigate('/');
    } catch (error) {
      console.error('Error submitting login:', error);
      if (error.response && error.response.status === 401) {
        alert('Invalid username or password.');
      }
    }
  };

  const logout = () => {
    removeCookie('logged-in');
    setLoggedIn(false);
    console.log('Logout successful.');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

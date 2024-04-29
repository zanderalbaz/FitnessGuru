import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
const navigate = useNavigate();
const [cookies, setCookie, removeCookie] = useCookies(['logged-in', 'userType']);
const [loggedIn, setLoggedIn] = useState(cookies['logged-in']);
const [userType, setUserType] = useState(cookies['userType']);

useEffect(() => {
  const token = cookies['logged-in'];
  if (token) {
    setLoggedIn(true);
    const userType = cookies['userType'];
    if (userType) {
      setUserType(userType);
    }
  }
}, [cookies]);

const login = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:5000/api/user/login', {
      username,
      password,
    });
    setCookie('logged-in', response.data.token, { expires: new Date(Date.now() + 10 * 60 * 1000) }); //Cookie timer is 10 minutes
    setCookie('userType', response.data.userType);
    setLoggedIn(true);
    setUserType(response.data.userType);
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
  removeCookie('userType');
  setLoggedIn(false);
  setUserType('unknown');
  console.log('Logout successful.');
  navigate('/login');
};

const isManager = () => {
  return userType == 'manager';
};

const isMember = () => {
  return userType === 'member';
};

const isStaff = () => {
  return userType === 'staff';
};

return (
  <AuthContext.Provider value={{ loggedIn, userType, login, logout, isManager, isMember, isStaff }}>
    {children}
  </AuthContext.Provider>
);
};

export const useAuth = () => useContext(AuthContext);

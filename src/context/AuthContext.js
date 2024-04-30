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


  const resetCookieExpiration = () => {
    const token = cookies['logged-in'];
    if (token) {
      const expirationTime = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now
      setCookie('logged-in', token, { expires: expirationTime });
      setCookie('userType', cookies['userType'], { expires: expirationTime });
    }
  };

  //THIS IS TO PREVENT THE USER FROM BEING LOGGED OUT AUTOMATICALLY AFTER 10 MINS
  useEffect(() => {
    const interactionListener = () => {
      resetCookieExpiration();
    };
    window.addEventListener('mousemove', interactionListener);

    return () => {
      window.removeEventListener('mousemove', interactionListener);
    };
  }, [cookies]);

  const login = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/user/login', {
        username,
        password,
      });
      const expirationTime = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes (units in ms)
      setCookie('logged-in', response.data.token, { expires: expirationTime });
      setCookie('userType', response.data.userType, { expires: expirationTime });
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
    return userType === 'manager';
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

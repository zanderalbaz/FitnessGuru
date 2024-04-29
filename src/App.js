import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext'; // Import useAuth hook

import '../src/views/css/global.css';
import '../src/tailwindcss/styles.css';

import HomePage from '../src/views/components/HomePage';
import LoginPage from '../src/views/components/LoginPage';
import NavBar from '../src/views/components/Navbar';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

const ProtectedHomePage = () => {
  const { loggedIn } = useAuth();

  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <HomePage />;
};

export default App;

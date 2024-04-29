import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext'; 

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
        <Routes> {/*THESE ARE FOR DECLARING ROUTES ONLY. THIS ONLY EFFECTS WHERE PATHS GO. IT DOES NOT RENDER ANYTHING */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} /> 
          <Route path="/manage-staff" element={<ManagerPage />} /> 
          <Route path="/courses" element={<StaffPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

const ProtectedDashboard = () => {
  const {loggedIn, isManager, isStaff, isMember} = useAuth();
  if(!loggedIn){
    return <Navigate to="/" replace />
  }
  if(isMember()){
    return <h1>Member Dashboard</h1>
  }
  else if(isStaff()){
    return <h1>Staff Dashboard</h1>
  }
  else if(isManager()){
    return <h1>Manager Dashboard</h1>
  }
  else {
    console.log("could not recognize user type");
    return <Navigate to="/" replace />

  }
}

const ManagerPage = () => {
  const { loggedIn, isManager} = useAuth();
  if (!loggedIn || !isManager()) { 
    return <Navigate to="/" replace />;
  }
  return <h1>Manager Page</h1>;
};


const StaffPage = () => {
  const {loggedIn, isStaff} = useAuth();
  if(!loggedIn || !isStaff()){
    return <Navigate to="/" replace />
  }
  return <h1>Staff Page</h1>
}
export default App;

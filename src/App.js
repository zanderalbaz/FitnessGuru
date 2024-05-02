import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext'; 

import '../src/views/css/global.css';
import '../src/tailwindcss/styles.css';

import HomePage from '../src/views/components/HomePage';
import LoginPage from '../src/views/components/auth/LoginPage';
import NavBar from '../src/views/components/Navbar';
import Dashboard from '../src/views/components/admin/Dashboard'
import ManageMembers from '../src/views/components/ManageMembers'
import ManageStaff from '../src/views/components/ManageStaff'
import ManageCourses from '../src/views/components/ManageCourses'
import MyCourses from '../src/views/components/MyCourses'

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <Routes> {/*THESE ARE FOR DECLARING ROUTES ONLY. THIS ONLY EFFECTS WHERE PATHS GO. IT DOES NOT RENDER ANYTHING */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} /> 
          <Route path="/manage-members" element={<ManageMembers />} /> 
          <Route path="/manage-staff" element={<ManageStaff />} /> 
          <Route path="/manage-courses" element={<ProtectedManageCourses />} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/Dashboard" element={<ProtectedDashboard />} />
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
  if(isManager()){
    return <Dashboard />
  }
  else {
    console.log("could not recognize user type");
    return <Navigate to="/" replace />

  }
}

const ProtectedManageCourses = () => {
  const { loggedIn, isManager} = useAuth();
  if (!loggedIn || !isManager()) { 
    return <Navigate to="/" replace />;
  }
  return <ManageCourses />;
};

const ProtectedManageStaff = () => {
  const { loggedIn, isManager} = useAuth();
  if (!loggedIn || !isManager()) { 
    return <Navigate to="/" replace />;
  }
  return <ManageStaff />;
};


const StaffPage = () => {
  const {loggedIn, isStaff} = useAuth();
  if(!loggedIn || !isStaff()){
    return <Navigate to="/" replace />
  }
  return <h1>Staff Page</h1>
}
export default App;

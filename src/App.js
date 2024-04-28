import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import '../src/views/css/global.css';
import '../src/tailwindcss/styles.css';

import  HomePage from '../src/views/components/HomePage' ;
import  LoginPage from '../src/views/components/LoginPage' ;

import NavBar from '../src/views/components/Navbar';


function App() {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/fuck" element={<HomePage/>}/>

            </Routes>
            {/* <Footer/> */}
        </Router>
    );
}

export default App;

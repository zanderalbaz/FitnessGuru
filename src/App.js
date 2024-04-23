import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import '../src/views/css/global.css';
import '../src/tailwindcss/styles.css';

import  HomePage from '../src/views/components/HomePage' ;

function App() {
   

    return (
        <Router>
            {/* <Header/> */}
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
            {/* <Footer/> */}
        </Router>
    );
}

export default App;

import React from 'react';
import './App.css';
import './css/login.css';
import './css/signup.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';
import Body from './components/Body';
import Top from './components/Top';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Lower from './components/Lower';
import Bottom from './components/Bottom';
import Last from './components/Last';
import Courses from './components/Courses';
import About from './components/About';



function App() {
  return ( <div>
    <Router>
 <Header/>
      <Navbar/>
      <Top/>
      
      <Routes>
      

        <Route path="/Login" element={<Login />} />
       
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Courses" element={<Courses/>} />
          <Route path="/About" element={<About/>} />
      </Routes>
      <Body/>
      <Lower/>
      <Bottom/>
      <Last/>
      
      <Footer/>
      </Router>
</div>
  );
}

export default App;


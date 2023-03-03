import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Components
import Contact from './pages/Contact';
import Events from './pages/Events';
import Login from './pages/Login';
import Member from './pages/Member';
import Messaging from './pages/Messaging';
import Network from './pages/Network';
import Resources from './pages/Resources';
import Surveys from './pages/Surveys';
import Visitor from './pages/Visitor';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Visitor/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/member" element={<Member/>} />
          <Route path="/network" element={<Network/>} />
          <Route path="/messaging" element={<Messaging/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/surveys" element={<Surveys/>} />
          <Route path="/resources" element={<Resources/>} />
        </Routes>
      </Router>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;

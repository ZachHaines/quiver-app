import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// Components
import Contact from './components/Contact';
import Events from './components/Events';
import Login from './components/Login';
import Member from './components/Member';
import Messaging from './components/Messaging';
import Network from './components/Network';
import Resources from './components/Resources';
import Surveys from './components/Surveys';
import Visitor from './components/Visitor';
import NavBar from './components/NavBar';
import UnitLogo from './images/unit_insignia.png'


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

/*
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Quiver App
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/
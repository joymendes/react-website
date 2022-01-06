import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Router>
        <Sidebar/>
        <Navbar/>
      </Router>
    </div>
  );
}

export default App;

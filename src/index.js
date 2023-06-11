import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './components/UserContext';
import './index.css';
import Login from './container/login/Login';
import Home from './container/homePage/Home';

createRoot(document.getElementById('root')).render(
  <Router>
    <UserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </UserProvider>
  </Router>
);

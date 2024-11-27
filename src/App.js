import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Users from './pages/Users';
import Roles from './pages/Roles';

const App = () => (
  <Router>
    <Navbar />
    <Sidebar />
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/roles" element={<Roles />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  </Router>
);

export default App;

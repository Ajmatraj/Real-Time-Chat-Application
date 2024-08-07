import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Messages from './components/Messages';
import Settings from './components/Settings';
import Sidebar from './components/Saidbar';


const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar/>
        
        <div className="content flex-grow">
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>}  />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings/>} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

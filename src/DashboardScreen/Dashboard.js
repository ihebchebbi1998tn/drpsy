// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Sidebar from './DashboardScreen/Sidebar';
import MainContent from './DashboardScreen/MainContent';
import TopBar from './DashboardScreen/TopBar';
import UserSettings from './DashboardScreen/UserSettings'; // Import your UserSettings component
import History from './DashboardScreen/History'; // Import your History component
import Clients from './DashboardScreen/Clients';
import Videos from './DashboardScreen/Videos';
const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Sidebar />
        <div className="main-panel">
          <TopBar />
          <Routes> 
            <Route path="apipsy/dashboard/settings" element={<UserSettings />} /> {/* Route for user settings */}
            <Route path="apipsy/dashboard/history" element={<History />} /> {/* Route for history */}
            <Route path="apipsy/dashboard/clients" element={<Clients />} /> {/* Route for history */}
            <Route path="apipsy/dashboard/upload" element={<Videos />} /> {/* Route for history */}
            <Route path="apipsy/dashboard/" element={<MainContent />} exact /> {/* Default route */}
          </Routes>
          <footer className="footer">
            <div className="container-fluid">
              <nav className="pull-left">
                <ul>
                  <li>
                  <a href="/">Home</a>
                  </li>
                </ul>
              </nav>
              <p className="copyright pull-right">
                &copy; {new Date().getFullYear()} <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web
              </p>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;

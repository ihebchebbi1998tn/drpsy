import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate for redirection
import Sidebar from './DashboardScreen/Sidebar';
import MainContent from './DashboardScreen/MainContent';
import TopBar from './DashboardScreen/TopBar';
import UserSettings from './DashboardScreen/UserSettings'; // Import your UserSettings component
import History from './DashboardScreen/History'; // Import your History component
import Clients from './DashboardScreen/Clients';
import Videos from './DashboardScreen/Videos';

const App = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    // Function to protect routes based on user existence
    const ProtectedRoute = ({ element }) => {
        return user ? element : <Navigate to="https://talelgym.tn/apipsy" />; // Redirect to home if no user exists
    };

    return (
        <Router>
            <div className="wrapper">
                <Sidebar user={user} />
                <div className="main-panel">
                    <TopBar />
                    <Routes>
                        <Route path="apipsy/dashboard/settings" element={<ProtectedRoute element={<UserSettings user={user} />} />} />
                        <Route path="apipsy/dashboard/history" element={<ProtectedRoute element={<History user={user} />} />} />
                        <Route path="apipsy/dashboard/clients" element={<ProtectedRoute element={<Clients user={user} />} />} />
                        <Route path="apipsy/dashboard/upload" element={<ProtectedRoute element={<Videos user={user} />} />} />
                        <Route path="apipsy/dashboard/" element={<MainContent user={user} />} exact />
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

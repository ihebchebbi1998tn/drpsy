import React from 'react';

const TopBar = () => {
    // Logout function to clear user from local storage and redirect
    const handleLogout = () => {
        localStorage.removeItem('user'); // Remove user from local storage
        window.location.href = 'https://talelgym.tn/apipsy/'; // Redirect to the specified URL
    };

    return (
        <nav className="navbar navbar-default navbar-fixed">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/">Accueil</a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
                                Déconnexion
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default TopBar;

// TopBar.js
import React from 'react';

const TopBar = () => (
    <nav className="navbar navbar-default navbar-fixed">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Accueil</a>
            </div>
            <div className="collapse navbar-collapse">
               
                <ul className="nav navbar-nav navbar-right">
                    <li>
                       <a href="">
                       Déconnexion
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default TopBar;

<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import '../index.css';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    setIsAuthenticated(!!currentUser);
  }, []);
=======
import React, { useState } from 'react';
import '../index.css';  
import logo from '../assets/logo.png'


const Header = () => {
  const [activeLink, setActiveLink] = useState('');
>>>>>>> fb03957da1eeaf6e6a80e7174b0de5832a3717e9

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

<<<<<<< HEAD
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setIsAuthenticated(false);
    navigate('/connexion');
  };

=======
>>>>>>> fb03957da1eeaf6e6a80e7174b0de5832a3717e9
  return (
    <header>
      <nav>
        <img className="logo" src={logo} alt="Logo" />
        <ul className="nav-links">
          <li>
            <a
              href="/accueil"
              className={activeLink === 'accueil' ? 'active' : ''}
              onClick={() => handleLinkClick('accueil')}
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="/movies"
              className={activeLink === 'movies' ? 'active' : ''}
              onClick={() => handleLinkClick('movies')}
            >
              Films
            </a>
          </li>
<<<<<<< HEAD

          {isAuthenticated ? (
            <>
              <li>
                <a
                  href="/add"
                  className={activeLink === 'add' ? 'active' : ''}
                  onClick={() => handleLinkClick('add')}
                >
                  Ajouter
                </a>
              </li>
              <li>
                <button onClick={handleLogout} className="logout-button">
                  Déconnexion
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <a
                  href="/connexion"
                  className={activeLink === 'connexion' ? 'active' : ''}
                  onClick={() => handleLinkClick('connexion')}
                >
                  Connexion
                </a>
              </li>
              <li>
                <a
                  href="/inscription"
                  className={activeLink === 'inscription' ? 'active' : ''}
                  onClick={() => handleLinkClick('inscription')}
                >
                  Inscription
                </a>
              </li>
            </>
          )}
=======
          <li>
            <a
              href="/connexion"
              className={activeLink === 'connexion' ? 'active' : ''}
              onClick={() => handleLinkClick('connexion')}
            >
              Connexion
            </a>
          </li>
          <li>
            <a
              href="/inscription"
              className={activeLink === 'inscription' ? 'active' : ''}
              onClick={() => handleLinkClick('inscription')}
            >
              Inscription
            </a>
          </li>
>>>>>>> fb03957da1eeaf6e6a80e7174b0de5832a3717e9
        </ul>
      </nav>
    </header>
  );
};

export default Header;

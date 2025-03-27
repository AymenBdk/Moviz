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

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setIsAuthenticated(false);
    navigate('/connexion');
  };

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
        </ul>
      </nav>
    </header>
  );
};

export default Header;

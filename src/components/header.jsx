import React, { useState } from 'react';
import '../index.css';  
import logo from '../assets/logo.png'


const Header = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;

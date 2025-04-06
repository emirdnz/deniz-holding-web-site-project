import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="../../public/logo192.png" alt="Deniz Holding Logo" />
        </Link>
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/about">{t('about')}</Link></li>
            <li><Link to="/investor-relations">{t('investorRelations')}</Link></li>
            <li><Link to="/sustainability">{t('sustainability')}</Link></li>
         
          </ul>
        </nav>
        <div className="header-right">
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('tr')}>TR</button>
          <button className="search-btn">🔍</button>
        </div>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
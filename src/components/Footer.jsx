// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src="/logo.png" alt="Deniz Holding Logo" />
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>{t('about')}</h4>
              <ul>
                <li><Link to="/about/history">{t('history')}</Link></li>
                <li><Link to="/about/vision-mission">{t('visionMission')}</Link></li>
                <li><Link to="/about/management">{t('management')}</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>{t('businesses')}</h4>
              <ul>
                <li><Link to="/sectors/energy">{t('energy')}</Link></li>
                <li><Link to="/sectors/automotive">{t('automotive')}</Link></li>
                <li><Link to="/sectors/finance">{t('finance')}</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>{t('sustainability')}</h4>
              <ul>
                <li><Link to="/sustainability/approach">{t('approach')}</Link></li>
                <li><Link to="/sustainability/projects">{t('projects')}</Link></li>
                <li><Link to="/sustainability/reports">{t('reports')}</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>{t('investorRelations')}</h4>
              <ul>
                <li><Link to="/investor-relations/financial-reports">{t('financialReports')}</Link></li>
                <li><Link to="/investor-relations/stock-info">{t('stockInfo')}</Link></li>
                <li><Link to="/investor-relations/presentations">{t('presentations')}</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="[https://www.linkedin.com](https://www.linkedin.com)" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="[https://www.twitter.com](https://www.twitter.com)" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="[https://www.instagram.com](https://www.instagram.com)" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="[https://www.youtube.com](https://www.youtube.com)" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <div className="footer-legal">
            <Link to="/privacy-policy">{t('privacyPolicy')}</Link>
            <Link to="/terms-of-use">{t('termsOfUse')}</Link>
            <Link to="/sitemap">{t('sitemap')}</Link>
          </div>
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Deniz Holding. {t('allRightsReserved')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
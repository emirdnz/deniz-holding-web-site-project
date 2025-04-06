// pages/Home.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <section className="hero">
        <h1>{t('welcomeToDenizHolding')}</h1>
        <p>{t('heroDescription')}</p>
      </section>
      <section className="featured-news">
        <h2>{t('latestNews')}</h2>
        {/* Haber kartları buraya gelecek */}
      </section>
      <section className="sectors">
        <h2>{t('ourSectors')}</h2>
        {/* Sektör kartları buraya gelecek */}
      </section>
      <section className="sustainability">
        <h2>{t('sustainabilityHighlights')}</h2>
        {/* Sürdürülebilirlik içeriği buraya gelecek */}
      </section>
    </div>
  );
};

export default Home;
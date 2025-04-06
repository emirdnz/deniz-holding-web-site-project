import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const AboutContainer = styled.div`
  padding: 2rem;
`;

const About = () => {
  const { t } = useTranslation();

  return (
    <AboutContainer>
      <h1>{t('about')}</h1>
      <p>{t('aboutDescription')}</p>
    </AboutContainer>
  );
};

export default About;
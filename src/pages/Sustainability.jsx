import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const SustainabilityContainer = styled.div`
  padding: 2rem;
`;

const Sustainability = () => {
  const { t } = useTranslation();

  return (
    <SustainabilityContainer>
      <h1>{t('sustainability')}</h1>
      <p>{t('sustainabilityDescription')}</p>
    </SustainabilityContainer>
  );
};

export default Sustainability;
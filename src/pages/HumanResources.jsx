import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const HumanResourcesContainer = styled.div`
  padding: 2rem;
`;

const HumanResources = () => {
  const { t } = useTranslation();

  return (
    <HumanResourcesContainer>
      <h1>{t('humanResources')}</h1>
      <p>{t('humanResourcesDescription')}</p>
    </HumanResourcesContainer>
  );
};

export default HumanResources;
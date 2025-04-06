import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const InvestorRelationsContainer = styled.div`
  padding: 2rem;
`;

const InvestorRelations = () => {
  const { t } = useTranslation();

  return (
    <InvestorRelationsContainer>
      <h1>{t('investorRelations')}</h1>
      <p>{t('investorRelationsDescription')}</p>
    </InvestorRelationsContainer>
  );
};

export default InvestorRelations;
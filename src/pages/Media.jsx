import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const MediaContainer = styled.div`
  padding: 2rem;
`;

const Media = () => {
  const { t } = useTranslation();

  return (
    <MediaContainer>
      <h1>{t('media')}</h1>
      <p>{t('mediaDescription')}</p>
    </MediaContainer>
  );
};

export default Media;
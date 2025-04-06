import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const ContactContainer = styled.div`
  padding: 2rem;
`;

const Contact = () => {
  const { t } = useTranslation();

  return (
    <ContactContainer>
      <h1>{t('contact')}</h1>
      <p>{t('contactDescription')}</p>
      <form>
        <input type="text" placeholder={t('name')} />
        <input type="email" placeholder={t('email')} />
        <textarea placeholder={t('message')}></textarea>
        <button type="submit">{t('send')}</button>
      </form>
    </ContactContainer>
  );
};

export default Contact;
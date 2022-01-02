import React from 'react';
import { useTranslation } from 'react-i18next';

function Title () {
  const { t } = useTranslation();
  return(
  <div>
    <h1>{t('title')}</h1>
  </div>
  )
}
export default Title;

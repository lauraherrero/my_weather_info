import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function  Button () {
  const { t, i18n } = useTranslation();
  const [language, setLenguage] = useState('es');

  const onChangeLanguaje = () => {
    i18n.changeLanguage(language);
    if (language === 'es') {
      setLenguage('en');
    } else {
      setLenguage('es');
    }
  };
  return(
  <div>
    <button onClick={onChangeLanguaje}>
      {t('btnTraslate')}
    </button>
  </div>
  )
}
export default  Button;

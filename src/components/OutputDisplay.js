import React from 'react';
import descarga from "../images/descarga.png";
import { useTranslation } from 'react-i18next';

function OutputDisplay (props) {
  const { t } = useTranslation();
  return (
  <div>
    <div className="outputDisplay">
      <br/>
      { props.city && props.country ?
      <h3>{ props.city }, { props.country }</h3>
      : "" }
      <h2>
        { props.tempOutput ?
        <span>{ props.tempOutput } °C</span> 
        : <span className="temp">{t("noData")}</span> 
        }
      </h2>
      <p className="temp-wrapper">{t('minTemp')}
      { props.tempMinOutput ?
        <span className="temp">{ props.tempMinOutput } <span className="temp-symbol"> °C</span></span>
        : <span className="temp">{t("noLoaded")}</span>
      }
      </p>
      <p className="temp-wrapper">{t('maxTemp')}
      { props.tempMaxOutput ?
        <span className="temp">{ props.tempMaxOutput } <span className="temp-symbol"> °C</span></span>
        : <span className="temp">{t("noLoaded")}</span>
      }
      </p>
      <p className="temp-wrapper">{t('currentConditions')}
        <span className="temp">{ props.condOutput }</span>
      </p>
      { props.iconOutput ?
      <img
        className="image-icon"
        src={`https://openweathermap.org/img/wn/${props.iconOutput}@2x.png`}
        alt="/"
      />
      : <img
        className="image-icon icon-empty"
        src={descarga}
        alt="/"
      />
      }
      <br/>
    </div>
  </div>
  )
}

export default OutputDisplay;

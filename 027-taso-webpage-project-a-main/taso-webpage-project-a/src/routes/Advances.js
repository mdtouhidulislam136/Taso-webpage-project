import React from 'react';
import "../App.css";
import {useTranslation} from 'react-i18next';

function Advances() {
    const {t, i18n } = useTranslation();

    return (
      <main>
        <div>
          <img src="images/advances.jpg" alt="" />
        </div>
        <div className="text-right">
          <h4>{t('greeting')}</h4>
          <h4>{t('clubroom-purchase')}</h4>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSelMUKqTA3arD_nCtFq6fqz5mPQ798mogldyNRysXpCEAoxsA/viewform">
            <button className="button">{t('clubroom-purchasebutton1')}</button>
          </a>
          <br />
          <br />

          <h4>{t("clubroom-excursion1")}</h4>
          <h4>{t("clubroom-excursion2")}</h4>
          <a href="https://docs.google.com/forms/d/14WryvMHqKEcvMPu8TLvYbu9U_FanMaPayyAu34Awc5I/prefill">
            <button type="button" className="button">{t('clubroom-purchasebutton2')}</button>
          </a>
        </div>
      </main>
  );
}
export default Advances;

import React from 'react';
import "../App.css";
import {useTranslation} from 'react-i18next';
function Proceedings() {
    const {t, i18n } = useTranslation();
    return(
        <main class="main">
            <div>
                <img className="proceding-image" src="images/proceeding.jpg" alt="" />
            </div>
            <div className="proceedings">
                <h4>{t('proceeding-description')}</h4>
                <h3>{t('proceeding-laisuretitle')}</h3>
                     <ul className="activity">
                         <li>{t('laisure1')}</li>
                         <li>{t('laisure2')}</li>
                         <li>{t('laisure3')}</li>
                         <li>{t('laisure4')}</li>
                         <li>{t('laisure5')}</li>
                         <li>{t('laisure6')}</li>
                     </ul>
                     <h3>{t('proceeding-business-event-title')}</h3>
                     <h4>
                    {t('proceeding-business-event-description')}
                     </h4>

                     <ul>
                         <li>{t('event1')}</li>
                         <li>{t('event2')}</li>
                         <li>{t('event3')}</li>
                     </ul>
            </div>
        </main>
    )
}
export default Proceedings;

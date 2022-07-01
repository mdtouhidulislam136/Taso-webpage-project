import React from 'react';
import "../App.css";
import {useTranslation} from 'react-i18next';

function Partners() {
  const {t, i18n } = useTranslation();
    return (
      <main className="main">
       <div className="description">
        <h3> {t('partners-description1')} </h3>
        <br />
        <br />
        <h3>
        {t('partners-description2')}
        </h3>
       </div>

       <div className="description">
        <h1 className="title">
         {t('partners-basis')}
        </h1>
        <h3 className="title-description">
        {t('basis-description')}
        </h3>
       </div>

       <div className="description">
        <h1 className="title">
         {t('partners-excursions')}
        </h1>
        <h3 className="title-description">
        {t('excursions-description')}
        </h3>
       </div>

       <div className="description">
        <h1 className="title">
        {t('partners-visitor')}
        </h1>
        <h3 className="title-description">
        {t('visitor-description')}
        </h3>
       </div>

       <div className="description">
        <h1 className="title">
        {t('partner-iot')}
        </h1>
        <h3 className="title-description">
        {t('iot-description')}
        </h3>
       </div>

       <div className="description">
        <h1 className="title">
       {t('partners-add')}
        </h1>
        <h3 className="title-description">
        {t('add-description')}
        </h3>
       </div>
      </main>
    );
}

export default Partners;
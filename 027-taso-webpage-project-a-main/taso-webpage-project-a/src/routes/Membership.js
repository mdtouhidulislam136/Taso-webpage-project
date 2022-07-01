import React from 'react';
import Button from 'react-bootstrap/Button';
import {useTranslation} from 'react-i18next';

function Membership() {
  const {t, i18n } = useTranslation();
  
    return (
      <main>
        <h1>{t('membership-title')}</h1>
        <div className="text-left">
          <p>{t('membership-description1')}</p>
          <p>{t('membership-description2')}</p>

         {t('membership-description3')}

          <p>{t('membership-description4')}</p>
          <p>
          {t('member-benefit')}
          <ul>
            <li>{t('benefit1')}</li>
            <li>{t('benefit2')}</li>
            <li>{t('benefit3')}</li>
            <li>{t('benefit4')}</li>
            <li>{t('benefit5')}</li>
          </ul>
          </p>
          <Button variant="outline-primary" href="https://kide.app/memberships/098dba4a-978e-4f2b-91f5-e60e0f82602a" target="_blank">{t('joinasmember-button')}</Button>
        </div>
      </main>
    );
  }

export default Membership;

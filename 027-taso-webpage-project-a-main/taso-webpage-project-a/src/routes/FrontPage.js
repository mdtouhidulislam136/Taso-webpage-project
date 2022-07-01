import React from 'react';
import Banner from './Banner';
import MyCalendar from './MyCalendar';
import {useTranslation} from 'react-i18next';
//import AnimatedText from 'react-animated-text-content';


function FrontPage() {
    const {t, i18n } = useTranslation();
    return(
        <div className="bannar">
            <Banner />
            <main>
                <div className="home-page">
                    <h1>{t('Homepage-title')}</h1>
                    <hr /> <br />
                    <div className="content">
                        <p>{t("home-description1")}</p>
                        <p>{t("home-description2")}</p>
                        <p>{t("home-description3")}</p>
                    </div>
                </div>
                <MyCalendar />
            </main>
        </div>
    )
}
export default FrontPage;
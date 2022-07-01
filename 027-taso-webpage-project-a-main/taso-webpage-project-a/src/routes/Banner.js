import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {useTranslation} from 'react-i18next';

function Banner() {
    const {t, i18n } = useTranslation();
    return(
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="images/banner-1.jpeg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>{t('frontpagebanner-title')}</h3>
                    <p>{t('frontpagebanner-descrption')}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="images/banner-4.jpeg"
                    alt="Our Team"
                    />
                    <Carousel.Caption>
                    <h3>{t('frontpageproceeding-title')}</h3>
                    <p>{t('frontpageproceeding-description')}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="images/banner-5.jpeg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>{t('frontpagemembership-title')}</h3>
                    <p>{t('frontpagemembership-description')}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
export default Banner;

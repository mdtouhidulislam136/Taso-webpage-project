import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import TranslationEN from './locales/en/translationEN.json';
import TranslationFI from './locales/fi/translationFI.json';

// the translations

const resources = {
    en: {
        translation: TranslationEN
    },
    fi: {
        translation: TranslationFI
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'fi',

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    })

 export default i18n;

import i18next from 'i18next';
import { getLocales } from 'react-native-localize';

const getLanguage = {
  type: 'languageDetector',
  init: () => null,
  detect: () => {
    const locales = getLocales();
    return locales[0].languageCode;
  },
  cacheUserLanguage: () => null
};

i18next.use(getLanguage).init({
  fallbackLng: 'es',
  initImmediate: false
});

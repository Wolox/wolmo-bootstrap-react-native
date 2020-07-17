const resources = {
  en: {},
  es: {}
};

const DEFAULT_LOCALE = 'es';

export default {
  addResources: (lang, ns, translations) =>
    Object.keys(translations).forEach(t => {
      resources[lang][`${ns}:${t}`] = translations[t];
    }),
  t: str => resources[DEFAULT_LOCALE][str] || str
};

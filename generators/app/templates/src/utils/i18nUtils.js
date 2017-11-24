import I18n from 'react-native-i18n';
import mapKeys from 'lodash/mapKeys';
import mapValues from 'lodash/mapValues';
import { constantCase } from 'change-case';

import { arrayToObject } from './arrayUtils';

const getI18key = (namespace, key) => `${namespace}:${key}`;

export const buildTranslations = (translations, namespace) =>
  mapValues(translations, translation => mapKeys(translation, (_, key) => getI18key(namespace, key)));

export const buildConstants = (translations, namespace, locale) => {
  const constants = {};
  Object.keys(translations[locale]).forEach(
    key =>
      (constants[constantCase(key)] = (...configArgs) =>
        I18n.t(getI18key(namespace, key), arrayToObject(configArgs)))
  );
  return constants;
};

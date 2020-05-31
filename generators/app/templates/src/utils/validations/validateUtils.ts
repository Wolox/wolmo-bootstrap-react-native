import i18next from 'i18next';

import './i18n';

// REGEXS
const emailRegex = /^(([^<>()·=~ºªÇ¨?¿*^|#¢∞¬÷"$%"≠´}{![\]\\.,;:\s@"]+(\.[^<>·$%&/=~ºªÇ¨?¿*^|#¢∞¬÷""≠´}{!()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const alphanumericRegex = /^[a-zA-Z0-9]*$/g;
const onlyTextRegex = /^[a-zA-Z\s]*$/;
const onlyNumberRegex = /^[0-9]*$/g;

// Validations Wrapper. For example: validate={validationsWrapper([validateRequired, validateEmail])}
export const validationsWrapper = (validations: Array<(value: string) => string | undefined>) => (
  value: string
) => {
  // eslint-disable-next-line init-declarations
  let finalError: string | undefined;
  validations.some(validation => {
    const result = validation(value);
    if (result) finalError = result;
    return !!result;
  });
  return finalError;
};

// VALIDATIONS
export const validateRequired = (value: string) =>
  value ? undefined : i18next.t('VALIDATIONS:REQUIRED_FIELD');

export const validateEmail = (value: string) =>
  value && emailRegex.test(value) ? undefined : i18next.t('VALIDATIONS:INVALID_EMAIL');

export const validateAlphanumeric = (value: string) =>
  value && alphanumericRegex.test(value) ? undefined : i18next.t('VALIDATIONS:ALPHANUMERIC');

export const validateOnlyText = (value: string) =>
  value && onlyTextRegex.test(value) ? undefined : i18next.t('VALIDATIONS:ONLY_TEXT');

export const validateOnlyNumber = (value: string) =>
  value && onlyNumberRegex.test(value) ? undefined : i18next.t('VALIDATIONS:ONLY_NUMBERS');

export const validateMinLength = (minValue: number) => (value: string) =>
  value && value.length >= minValue ? undefined : i18next.t('VALIDATIONS:MIN_LENGTH', { count: minValue });

export const validateMaxLength = (maxValue: number) => (value: string) =>
  value && value.length <= maxValue ? undefined : i18next.t('VALIDATIONS:MAX_LENGTH', { count: maxValue });

export const validateEqualLength = (equalValue: number) => (value: string) =>
  value && value.length === equalValue
    ? undefined
    : i18next.t('VALIDATIONS:EQUAL_LENGTH', { count: equalValue });

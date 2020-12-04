import i18next from 'i18next';

import './i18n';

// REGEXS
const emailRegex = /^(([^<>()·=~ºªÇ¨?¿*^|#¢∞¬÷"$%"≠´}{![\]\\.,;:\s@"]+(\.[^<>·$%&/=~ºªÇ¨?¿*^|#¢∞¬÷""≠´}{!()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const alphanumericRegex = /^[a-zA-Z0-9]*$/g;
const onlyTextRegex = /^[a-zA-Z\s]*$/;
const onlyNumberRegex = /^[0-9]*$/g;

// VALIDATIONS
export const validateRequired = { required: i18next.t('VALIDATIONS:REQUIRED_FIELD') };

export const validateEmail = { pattern: emailRegex, message: i18next.t('VALIDATIONS:INVALID_EMAIL') };

export const validateAlphanumeric = {
  pattern: alphanumericRegex,
  message: i18next.t('VALIDATIONS:ALPHANUMERIC')
};

export const validateOnlyText = { pattern: onlyTextRegex, message: i18next.t('VALIDATIONS:ONLY_TEXT') };

export const validateOnlyNumber = {
  pattern: onlyNumberRegex,
  message: i18next.t('VALIDATIONS:ONLY_NUMBERS')
};

export const validateMinLength = (minValue: number) => ({
  minLength: minValue,
  message: i18next.t('VALIDATIONS:MIN_LENGTH', { count: minValue })
});

export const validateMaxLength = (maxValue: number) => ({
  maxLength: maxValue,
  message: i18next.t('VALIDATIONS:MAX_LENGTH', { count: maxValue })
});

export const validateEqualLength = (equalValue: number) => ({
  validate: (value: string) =>
    value.length === equalValue || i18next.t('VALIDATIONS:EQUAL_LENGTH', { count: equalValue })
});

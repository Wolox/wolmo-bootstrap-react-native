import { Alert } from 'react-native';
import {
  setJSExceptionHandler,
  getJSExceptionHandler
} from 'react-native-exception-handler';
import i18next from 'i18next';

import './i18n';

const ErrorHandler = (error: Error, isFatal: boolean) => {
  const fatal: string = isFatal ? 'Fatal' : '';
  Alert.alert(
    `${i18next.t('ERRORBOUNDARY:ERROR_ALERT')}`,
    `${i18next.t('ERRORBOUNDARY:TYPE_ERROR', {
      fatal
    })}, ${error}${i18next.t('ERRORBOUNDARY:ERROR_MESSAGE')}
    `,
    [
      {
        text: 'OK'
      }
    ]
  );
};

export const ExceptionHandler = () => {
  getJSExceptionHandler();
  setJSExceptionHandler(ErrorHandler, true);
};

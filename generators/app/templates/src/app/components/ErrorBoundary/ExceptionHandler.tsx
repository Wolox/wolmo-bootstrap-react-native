import { Alert } from 'react-native';
import {
  setJSExceptionHandler,
  getJSExceptionHandler
} from 'react-native-exception-handler';
import i18next from 'i18next';

import './i18n';
/*
ErrorHandler was called when JSexception ocurred, in this case is an Alert, you can change this if you need.
*/
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
        text: 'Ok'
      }
    ]
  );
};

/*
we need to use this in index app, to catch errors correctly,
setJSExceptionHandler have two calls ErrorHandler was called in error,
in second param 'allowInDevMode' you can configure if you need or not see this handler. if false you see the classic redScreen error else return errorHandler with Alert
*/
export const ExceptionHandler = () => {
  getJSExceptionHandler();
  setJSExceptionHandler(ErrorHandler, true);
};

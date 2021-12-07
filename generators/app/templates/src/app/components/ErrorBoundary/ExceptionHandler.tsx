import { Alert } from 'react-native';
import {
  setJSExceptionHandler,
  getJSExceptionHandler
} from 'react-native-exception-handler';
const ErrorHandler = (error: Error, isFatal: boolean) => {
  Alert.alert(
    `Unexpected error occurred`,
    `Error: ${isFatal ? 'Fatal' : ''} ${error}
    We have reported this to our team ! Please close the app and start again!
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

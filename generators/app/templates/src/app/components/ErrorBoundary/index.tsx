import React, { FunctionComponent, ReactElement } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import ErrorFallback from './ErrorFallback';

/*
in this function we can use or save the error on cloud with others libraries like Sentry
import * as Sentry from '@sentry/react-native';
*/
const myErrorHandler = (error: Error) => {
  // Example: Sentry.captureException(error);
};

// this function receive a children: ReactElement and return the children component or fallbackComponent, in this case <ErrroFallBack/> and if was an error onError was called
export const ErrorHandler = ({
  children,
  component
}: {
  children: ReactElement;
  component?: FunctionComponent<FallbackProps>;
}) => {
  return (
    <ErrorBoundary
      FallbackComponent={component || ErrorFallback}
      onError={myErrorHandler}>
      {children}
    </ErrorBoundary>
  );
};

/*
  how to test error:
  tsx:
  const [statusOk, setStatusOk] = useState(true);
  useEffect(() => {
    if (!statusOk) throw new Error('new error coming');
  }, [statusOk]);
  const handleError = useCallback(() => {
    setStatusOk(false);
  }, [Error]);
return <Button onPress={handleError} title="get my error"/>
 */

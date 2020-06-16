/* eslint-disable no-empty-function */
import { useState, useCallback } from 'react';
import { ApiResponse } from 'apisauce';

interface RequestInterface {
  values: any;
  request: (values: any) => Promise<ApiResponse<any, any>>;
  onPrefetch: () => void;
  onSuccess: (data: any) => void;
  onError: (error: any) => void;
  onPostFetch: () => void;
  successSelector: (response: ApiResponse<any, any>) => any;
  failureSelector: (response: ApiResponse<any, any>) => any;
}
interface Params {
  initialState?: any;
  withPostSuccess?: (data: any, values: any) => void;
  withPostFailure?: (error: any, values: any) => void;
  successSelector?: (response: ApiResponse<any, any>) => any;
  failureSelector?: (response: ApiResponse<any, any>) => any;
}
const executeAsyncRequest = async ({
  values,
  request,
  onPrefetch,
  onSuccess,
  onError,
  onPostFetch,
  successSelector,
  failureSelector
}: RequestInterface) => {
  onPrefetch();
  const response = await request(values);
  if (response.ok) {
    onSuccess(successSelector(response));
  } else {
    onError(failureSelector(response));
  }
  onPostFetch();
};

export const useAsyncRequest = (
  request: (values: any) => Promise<ApiResponse<any, any>>,
  {
    initialState = null,
    withPostSuccess = () => {},
    withPostFailure = () => {},
    successSelector = (response: ApiResponse<any, any>) => response.data,
    failureSelector = (response: ApiResponse<any, any>) => response.problem
  }: Params = {}
): [Function, any, boolean, any] => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = useCallback(
    (values: any) =>
      executeAsyncRequest({
        values,
        request,
        onPrefetch: () => setLoading(true),
        onSuccess: (data: any) => {
          setState(data);
          setError(null);
          withPostSuccess(data, values);
        },
        onError: (errorInfo: any) => {
          setError(errorInfo);
          withPostFailure(errorInfo, values);
        },
        onPostFetch: () => setLoading(false),
        successSelector,
        failureSelector
      }),
    [failureSelector, request, successSelector, withPostFailure, withPostSuccess]
  );
  return [sendRequest, state, loading, error];
};

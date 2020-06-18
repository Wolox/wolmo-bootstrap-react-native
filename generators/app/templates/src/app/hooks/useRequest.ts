import { useState, useCallback } from 'react';
import { ApiErrorResponse, ApiOkResponse, PROBLEM_CODE, ApiResponse } from 'apisauce';
import { Nullable } from '@interfaces/globalInterfaces';

export type Error<E> = { problem: PROBLEM_CODE; errorData?: E };
type Request<P, D, E> = (params: P) => Promise<ApiResponse<D, E>>;
type Success<D> = (data?: D) => void;
type Failure<E> = (error: Error<E>) => void;
type PostFetch<D, E> = (response: ApiOkResponse<D> | ApiErrorResponse<E>) => void;
type SuccessSelector<D> = (response: ApiOkResponse<D>) => any;
type FailureSelector<E> = (response: ApiErrorResponse<E>) => any;

interface AsyncRequestHookParams<P, D, E> {
  request: Request<P, D, E>;
  withSuccessSelector?: SuccessSelector<D>;
  withPostSuccess?: Success<D>;
  withFailureSelector?: FailureSelector<E>;
  withPostFailure?: Failure<E>;
  initialState?: Nullable<D>;
  withPostFetch?: PostFetch<D, E>;
}

interface AsyncRequest<P, D, E> {
  values: P;
  request: Request<P, D, E>;
  onPrefetch: () => void;
  onSuccess: Success<D>;
  successSelector?: SuccessSelector<D>;
  onError: Failure<E>;
  failureSelector?: FailureSelector<E>;
  onPostFetch: PostFetch<D, E>;
}

const executeAsyncRequest = async <P, D, E>({
  values,
  request,
  onPrefetch,
  onSuccess,
  successSelector = response => response.data,
  onError,
  failureSelector = response => ({ problem: response.problem, errorData: response.data }),
  onPostFetch
}: AsyncRequest<P, D, E>) => {
  onPrefetch();
  const response = await request(values);
  if (response.ok) {
    onSuccess(successSelector(response));
  } else {
    onError(failureSelector(response));
  }
  onPostFetch(response);
};

// Returns a request to execute manually at some point, and the variables that will be updated when it does
export const useAsyncRequest = <P, D, E>({
  initialState = null,
  request,
  withSuccessSelector,
  withPostSuccess,
  withFailureSelector,
  withPostFailure,
  withPostFetch
}: AsyncRequestHookParams<P, D, E>): [Nullable<D>, boolean, Nullable<Error<E>>, (params: P) => void] => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Nullable<Error<E>>>(null);
  const sendRequest = useCallback(
    values => {
      executeAsyncRequest({
        values,
        request,
        onPrefetch: () => setLoading(true),
        onSuccess: data => {
          setState(data!);
          setError(null);
          if (withPostSuccess) withPostSuccess(data);
        },
        successSelector: withSuccessSelector,
        onError: errorInfo => {
          setError(errorInfo);
          if (withPostFailure) withPostFailure(errorInfo);
        },
        failureSelector: withFailureSelector,
        onPostFetch: response => {
          setLoading(false);
          if (withPostFetch) withPostFetch(response);
        }
      });
    },
    [request, withFailureSelector, withPostFailure, withPostFetch, withPostSuccess, withSuccessSelector]
  );

  return [state, loading, error, sendRequest];
};

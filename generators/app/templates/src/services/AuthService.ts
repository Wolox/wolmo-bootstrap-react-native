import { ApiResponse } from 'apisauce';
import { AuthData, SignUpData } from '@interfaces/authInterfaces';

export const login = (_: AuthData) => {
  // TODO: Implement call to authentication API here
  // TODO: If you want to test the error
  // return Promise.resolve({
  //   ok: false,
  //   problem: 'CLIENT_ERROR',
  //   originalError: {}
  // });
  return Promise.resolve({
    ok: true,
    problem: null,
    originalError: null,
    data: { sessionToken: 'token' }
  });
};

export const logout = () => {
  // TODO: Implement call to authentication API here
  // TODO: If you want to test the error
  // return Promise.resolve({
  //   ok: false,
  //   problem: 'CLIENT_ERROR',
  //   originalError: {}
  // });
  return Promise.resolve({
    ok: true,
    problem: null,
    originalError: null,
    data: null
  });
};

export const signup = (_: SignUpData) => {
  // TODO: Implement call to registration API here
  // TODO: If you want to test the error
  // return Promise.resolve({
  //   ok: false,
  //   problem: 'CLIENT_ERROR',
  //   originalError: {},
  //   data: 'Error en el signup!'
  // }) as Promise<ApiResponse<any, any>>;
  return Promise.resolve({
    ok: true,
    problem: null,
    originalError: null,
    data: {}
  }) as Promise<ApiResponse<any, any>>;
};

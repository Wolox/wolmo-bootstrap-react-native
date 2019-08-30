export const internalServerError = new Promise(resolve =>
  resolve({
    data: {
      status: 500,
      error: 'Internal Server Error'
    },
    ok: false,
    status: 500,
    problem: 'SERVER_ERROR'
  })
);
export const successApiCall = new Promise(resolve =>
  resolve({
    data: {
      data: {
        attributes: {
          email: ''
        }
      }
    },
    ok: true,
    status: 200,
    problem: null,
    headers: {
      'access-token': '',
      client: '',
      uid: ''
    }
  })
);

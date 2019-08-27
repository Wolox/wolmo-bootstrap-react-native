import React from 'react';
import { Provider } from 'react-redux';
import store from '@redux/store';

import App from '@app';
import '@config';

export default function index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

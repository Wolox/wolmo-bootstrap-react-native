import React from 'react';
import { Provider } from 'react-redux';
import '@config';
import store from '@redux/store';
import App from '@app';

export default function index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

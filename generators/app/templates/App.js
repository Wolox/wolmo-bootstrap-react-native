import React from 'react';
import { Provider } from 'react-redux';
import App from '@app';
import store from '@redux/store';
import '@config';

export default function index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

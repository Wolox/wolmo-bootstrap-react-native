import React from 'react';
import { Provider } from 'react-redux';

import './src/config';
import store from './src/redux/store';
import App from './src/app';

export default function index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

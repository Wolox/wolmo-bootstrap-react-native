import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import '@config';
import store from '@redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import App from './src/app';

const persistor = persistStore(store);

export default function index() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}

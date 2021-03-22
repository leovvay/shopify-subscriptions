import { PreLoader } from 'components/Molecules/PreLoader/PreLoader';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from 'store';

export const { store, persistor } = configureStore();

interface Props {
  children: React.ReactNode;
}

export const StateManagement = ({ children }: Props) => (
  <Provider store={store}>
    <PersistGate loading={<PreLoader />} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);

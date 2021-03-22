import { hot } from 'react-hot-loader/root';
import React, { Suspense } from 'react';

import { Router } from 'react-router';
// eslint-disable-next-line no-restricted-imports
import { ToastContainer } from 'react-toastify';

import { PreLoader } from 'components/Molecules/PreLoader/PreLoader';
import { history } from 'routes/history';

import { Routes } from './Routes';
import { StateManagement } from './StateManagement';
import { Styles } from './Styles';

export const RootUnwrapped = () => (
  <StateManagement>
    <Styles>
      <ToastContainer
        autoClose={5000}
        position="top-center"
        className="toast-container"
        closeButton={false}
        hideProgressBar
      />
      <Router history={history}>
        <Suspense fallback={<PreLoader />}>
          Hello shopify!
          <Routes />
        </Suspense>
      </Router>
    </Styles>
  </StateManagement>
);

export const Root = hot(RootUnwrapped);

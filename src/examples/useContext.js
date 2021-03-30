import React from 'react';
import { Main } from './Main';
import { Alert } from './AlertContext/Alert';
import { AlertProvider } from './AlertContext/AlertContext';

export const useContextComponent = () => {

  return (
    <AlertProvider>
      <>
        <Alert />
        <br />
        <Main />
        <br />
      </>
    </AlertProvider>
  );
};

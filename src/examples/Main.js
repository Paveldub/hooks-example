import React from 'react';
import { useAlert } from './AlertContext/AlertContext';

export const Main = () => {
  const { show } = useAlert();

  return (
    <>
      <h1>Привет в примере с useContext</h1>
      <button onClick={() => show('я из main.js')}>Показать Алерт</button>
    </>
  );
}

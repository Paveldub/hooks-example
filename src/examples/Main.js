import React from 'react';
import { useAlert } from './AlertContext/AlertContext';

export const Main = () => {
  const {toggle} = useAlert();

  return (
    <>
      <h1>Привет в примере с useContext</h1>
      <button onClick={toggle}>Показать Алерт</button>
    </>
  );
}

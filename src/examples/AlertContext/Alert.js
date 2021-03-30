import React from 'react';
import { useAlert } from './AlertContext';

export const Alert = () => {
  const alert = useAlert();

  if (!alert.visible) return null;

  return (
    <>
      <div onClick={alert.toggle}>
        <p>ОЧЕНЬ ВАЖНОЕ СООБЩЕНИЕ!</p>
      </div>
    </>
  );
};

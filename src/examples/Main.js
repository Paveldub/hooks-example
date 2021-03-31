import React from 'react';
import { useAlert } from './AlertContext/AlertContext';
import { useHistory } from 'react-router-dom';

export const Main = () => {
  const { show } = useAlert();

   const history = useHistory();

   const nextStep = () => {
     history.push('/customhook');
   };

  return (
    <>
      <h1>Привет в примере с useContext</h1>
      <button onClick={() => show('я из main.js')}>Показать Алерт</button>
      <button onClick={nextStep}>Next hook</button>
    </>
  );
}

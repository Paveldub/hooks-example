import React, { useState } from 'react';

export const compteInitialCounter = () => {
  return Math.trunc(Math.random() * 20);
};

export const UseStateExample = () => {
  const [counter, setCounter] = useState(() => compteInitialCounter());

  const increment = () => {
    setCounter((prevState) => prevState + 1);
  };

  const decriment = () => {
    setCounter((prevState) => prevState - 1);
  };

  const [state, setState] = useState({
    title: 'Initial title',
    date: Date.now(),
  });

  const changeTitle = () => {
    setState((prev) => {
      return {
        ...prev,
        title: 'Title has changed',
      };
    });
  };

  return (
    <>
      <h1>1. useState example</h1>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Add</button>
      <button onClick={decriment}>Remode</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={changeTitle}>Change Title</button>
    </>
  );
}
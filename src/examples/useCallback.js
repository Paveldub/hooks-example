import React, { useState, useMemo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import ItemsList  from './itemsList';

export const useCallbackComponent = () => {
  const [count, setCount] = useState(1);
  const [colored, setColored] = useState(false);

  const styles = useMemo(
    () => ({
      color: colored ? 'red' : '#000',
    }),
    [colored]
  );

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `Element ${i + 1}`);
  }, [count]);

  const history = useHistory();

  const nextStep = () => {
    history.push('/usecontext');
  };

  return (
    <>
      <h1 style={styles}>5. useCallback example: {count}</h1>
      <br />
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
      <br />
      <button onClick={() => setColored((prev) => !prev)}>Warning</button>
      <br />
      <ItemsList getItems={generateItemsFromAPI} />
      <br />
      <br />
      <button onClick={nextStep}>NEXT HOOK</button>
    </>
  );
};

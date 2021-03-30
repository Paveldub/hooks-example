import React, { useState, useMemo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function complexCompute(num) {
  console.log('complex caclulations');

  let i = 0;

  while (i < 100000000) i++;

  return num * 2;
}

export const UseMemoComponent = () => {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  const styles = useMemo(
    () => ({
      color: colored ? 'red' : '#000',
    }),
    [colored]
  );

  useEffect(() => {
    console.log('styles changed');
  }, [styles]);

  const history = useHistory();

  const nextStep = () => {
    history.push('/usecallback');
  };

  return (
    <>
      <h1 style={styles}>4. useMemo example: {computed}</h1>

      <br />
      <button onClick={() => setNumber((prev) => prev + 1)}>Add</button>
      <br />
      <button onClick={() => setNumber((prev) => prev - 1)}>Remove</button>
      <br />
      <button onClick={() => setColored((prev) => !prev)}>Warning</button>
      <br />
      <br />
      <br />

      <button onClick={nextStep}>NEXT HOOK</button>
    </>
  );
};

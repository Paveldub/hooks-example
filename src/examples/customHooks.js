import React, { useState, useEffect } from 'react';

function useLogger(value) {

  useEffect(() => {
    console.log('value changed', value);
  }, [value]);
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const clear = () => setValue(' ')

  return {
    bind: {
      value,
      onChange,
    },
    value,
    clear,
  };
}

export const CustomHook = () => {

  const input = useInput('');

  useLogger(input.value);

  return (
    <>
      <h1>
        Custom Hook: {input.value}
      </h1>
      <hr />
      <input type="text" {...input.bind} />
      <button onClick={() => input.clear()}>Clear data</button>
    </>
  );
}
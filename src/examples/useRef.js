import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const UseRefComponent = () => {
  // const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState('initial');

  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef('');

  useEffect(() => {
    prevValue.current = value;
  }, [value])

  useEffect(() => {
    renderCount.current++
    console.log(inputRef.current.value);
  })

  const focus = () => {
    inputRef.current.focus();
  }

  const history = useHistory();

  const nextStep = () => {
    history.push('/usememo');
  };

  return (
    <div>
      <h1>3. useRef: {renderCount.current}</h1>
      <h1>Prev value: {prevValue.current}</h1>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={focus}>Focus input</button>
      <br />
      <br />
      <br />

      <button onClick={nextStep}>NEXT HOOK</button>
    </div>
  );
};

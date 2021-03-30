import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const UseEffectExample = () => {
  const [type, setType] = useState('users');
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${type}`)
  //     .then((response) => response.json())
  //     .then((json) => setData(json));

  //   return () => {
  //     console.log('clean type');
  //   }
  // }, [type]);

  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  const mouseMoveHandler = (event) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  const history = useHistory();

  const nextStep = () => {
    history.push('/useref');
  };

  return (
    <>
      <h1>2. useEffect example</h1>
      <h1>Resource: {type}</h1>
      <br />
      <button onClick={() => setType('users')}>Users</button>
      <button onClick={() => setType('todos')}>To do</button>
      <button onClick={() => setType('Posts')}>Posts</button>

      <br />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
      <br />
      <br />
      <br />

      <button onClick={nextStep}>NEXT HOOK</button>
    </>
  );
};

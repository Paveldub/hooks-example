import React, {useEffect, useState} from 'react'

export const UseEffectExample = () => {
  const [type, setType] = useState('users');


  return (
    <>
      <h1>Resource: {type}</h1>
      <br />
      <button onClick={() => setType('users')}>Users</button>
      <button onClick={() => setType('To do')}>To do</button>
      <button onClick={() => setType('Posts')}>Posts</button>
    </>
  );
}


import React from 'react';

import { UseStateExample } from './examples/useState';
import { UseEffectExample } from './examples/useEffect';
import { UseRefComponent } from './examples/useRef';

function App() {
  return (
    <>
      <UseStateExample />
      <UseEffectExample />
      <UseRefComponent />
    </>
  );
}

export default App;

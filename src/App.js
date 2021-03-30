import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UseStateExample } from './examples/useState';
import { UseEffectExample } from './examples/useEffect';
import { UseRefComponent } from './examples/useRef';
import { UseMemoComponent } from './examples/useMemo';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={UseStateExample} />
          <Route path="/useeffect" component={UseEffectExample} />
          <Route path="/useref" component={UseRefComponent} />
          <Route path="/usememo" component={UseMemoComponent} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Excutive from './components/Excutive';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Excutive></Excutive>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

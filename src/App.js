import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Excutive from './components/Excutive';
import LoginSignUp from './components/LoginSignUp/LoginSignUp';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Excutive></Excutive>
        </Route>
        <Route path="/login">
          <LoginSignUp></LoginSignUp>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

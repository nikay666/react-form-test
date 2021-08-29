import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignUpPage } from './Pages/SignUpPage';
import { SignInPage } from './Pages/SignInPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={['/', '/singUp']} component={SignUpPage} />
          <Route path='/login' component={SignInPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

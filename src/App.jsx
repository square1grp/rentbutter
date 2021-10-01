import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { StateProvider } from './state';
import { Apply } from './pages';

const App = () => (
  <StateProvider>
    <Router>
      <Switch>
        <Route path='/apply/:companyId' exact component={Apply} />

        <Redirect to='/apply/google' />
      </Switch>
    </Router>
  </StateProvider >
);

export default App;
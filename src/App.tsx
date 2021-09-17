import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import { LoginFormPage } from './pages/LoginFormPage';
import { RegistrationFormPage } from './pages/RegistrationFormPage';
import { ResetPasswordFormPage } from './pages/ResetPasswordFormPage';

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/loginForm">
          <LoginFormPage/>
        </Route>
        <Route exact path="/registrationForm">
          <RegistrationFormPage/>
        </Route>
        <Route exact path="/resetPasswordForm">
          <ResetPasswordFormPage/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;

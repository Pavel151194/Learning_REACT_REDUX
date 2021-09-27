import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { HomePage, LoginFormPage, RegistrationFormPage, ResetPasswordFormPage, NewPasswordFormPage, RegistrationConfirmationPage, EmailConfirmedPage, PasswordConfirmationPage, PasswordConfirmedPage } from './pages'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/login">
          <LoginFormPage/>
        </Route>
        <Route exact path="/registration">
          <RegistrationFormPage/>
        </Route>
        <Route exact path="/reset-password">
          <ResetPasswordFormPage/>
        </Route>
        <Route exact path="/new-password">
          <NewPasswordFormPage/>
        </Route>
        <Route exact path="/registration-confirmation">
          <RegistrationConfirmationPage/>
        </Route>
        <Route exact path="/email-confirmed">
          <EmailConfirmedPage/>
        </Route>
        <Route exact path="/password-confirmation">
          <PasswordConfirmationPage/>
        </Route>
        <Route exact path="/password-confirmed">
          <PasswordConfirmedPage/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css'
import { EmailConfirmedPage } from './pages/EmailConfirmedPage'
import { HomePage } from './pages/HomePage'
import { LoginFormPage } from './pages/LoginFormPage'
import { NewPasswordFormPage } from './pages/NewPasswordFormPage'
import { PasswordConfirmationPage } from './pages/PasswordConfirmationPage'
import { PasswordConfirmedPage } from './pages/PasswordConfirmedPage'
import { RegistrationConfirmationPage } from './pages/RegistrationConfirmationPage'
import { RegistrationFormPage } from './pages/RegistrationFormPage'
import { ResetPasswordFormPage } from './pages/ResetPasswordFormPage'

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
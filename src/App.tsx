import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css'
import { LoginFormPage } from './pages/LoginFormPage'
import { RegistrationFormPage } from './pages/RegistrationFormPage'
import { ResetPasswordFormPage } from './pages/ResetPasswordFormPage'

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginFormPage/>
        </Route>
        <Route exact path="/registration">
          <RegistrationFormPage/>
        </Route>
        <Route exact path="/reset-password">
          <ResetPasswordFormPage/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App